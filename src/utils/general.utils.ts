import fs from 'fs';
import { NOTE_TYPES, TILE_TYPES } from '../constants/general.constants';

export const getNoteType = (noteType: string): string => {
  return NOTE_TYPES[noteType.toUpperCase() as keyof typeof NOTE_TYPES];
};

export const getTileType = (tileType: string): string => {
  return TILE_TYPES[tileType.toUpperCase() as keyof typeof TILE_TYPES];
};

/**
 * Obtiene los enlaces salientes de una nota en formato markdown.
 *
 * @param noteContent - Contenido de la nota en formato markdown
 * @param depth - Profundidad actual del enlace en el árbol de navegación (por defecto 0)
 * @returns Mapa con los enlaces encontrados, donde la clave es la URL y el valor es un objeto OutgoingLink
 */
export const getOutgoingLinks = (
  noteContent: string,
  depth: number = 0
): Map<string, OutgoingLink> => {
  if (!noteContent || typeof noteContent !== 'string') return new Map();

  const regex = /\[([^\]]*)\]\((\.\/[^\)]+)\)/gm;
  const links = new Map<string, OutgoingLink>();

  let match;
  while ((match = regex.exec(noteContent)) !== null) {
    const link = {
      text: match[1],
      url: match[2],
      depth: depth + 1,
      type: TILE_TYPES.UNKNOWN,
      exists: false,
    };
    links.set(link.url, link);
  }

  return links;
};

/**
 * Obtiene recursivamente todos los enlaces salientes de una nota hasta una profundidad máxima.
 *
 * @param noteContent - Contenido de la nota en formato markdown
 * @param maxDepth - Profundidad máxima de búsqueda de enlaces (por defecto 2)
 * @param currentDepth - Profundidad actual en la recursión (por defecto 0)
 * @param visited - Conjunto de URLs ya visitadas para evitar ciclos (por defecto vacío)
 * @param allLinks - Mapa acumulativo de todos los enlaces encontrados (por defecto vacío)
 * @returns Mapa con todos los enlaces encontrados hasta la profundidad máxima
 */
export const getOutgoingLinksToDepth = (
  noteContent: string,
  maxDepth: number = 2,
  currentDepth: number = 0,
  visited: Set<string> = new Set(),
  allLinks: Map<string, OutgoingLink> = new Map()
): Map<string, OutgoingLink> => {
  if (currentDepth >= maxDepth || !noteContent) return allLinks;

  const links = getOutgoingLinks(noteContent, currentDepth);

  // Merge new links into allLinks
  for (const [url, link] of links) {
    allLinks.set(url, link);
  }

  if (currentDepth + 1 >= maxDepth) return allLinks;

  const deeperLinks = Array.from(links.values()).filter(
    link => !visited.has(link.url)
  );

  deeperLinks.forEach(link => {
    visited.add(link.url);

    const notePath =
      link.url.replace('./', 'src/content/notes/') +
      (link.url.endsWith('.md') ? '' : '.md');
    try {
      const noteContent = fs.readFileSync(notePath, 'utf-8');
      if (noteContent) {
        getOutgoingLinksToDepth(
          noteContent,
          maxDepth,
          currentDepth + 1,
          visited,
          allLinks
        );
      }
    } catch (error) {
      console.warn(`No se pudo leer el archivo: ${notePath}`);
    }
  });

  return allLinks;
};
