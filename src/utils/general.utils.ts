import fs from 'fs';
import {
  MAP_CENTER,
  MAP_HEIGHT,
  MAP_WIDTH,
  TILE_TYPES,
} from '../constants/general.constants';
import type { OutgoingLink, Vector2 } from '../types/general.types';

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

/**
 * Genera una posición aleatoria en el mapa basada en la profundidad del nodo
 * @param depth - Profundidad del nodo (1 o 2). Determina qué tan lejos del centro se generará la posición
 * @returns Vector2 con las coordenadas x,y de la posición generada
 *
 * La función:
 * - Para depth=1: genera posiciones más cercanas al centro (radio = 30% del mapa)
 * - Para depth=2: genera posiciones más alejadas (radio = 60% del mapa)
 * - Mantiene una distancia mínima del 10% del radio desde el centro
 * - Asegura que la posición generada no sea igual al centro del mapa
 * - Restringe las coordenadas dentro de los límites del mapa
 */
export const getMapRandomPosition = (depth: number): Vector2 => {
  const radius =
    depth === 1
      ? Math.min(MAP_WIDTH, MAP_HEIGHT) * 0.3
      : Math.min(MAP_WIDTH, MAP_HEIGHT) * 0.6;

  // Establecer una distancia mínima desde el centro (10% del radio)
  const minDistance = radius * 0.1;

  let x: number, y: number;
  let distance: number;
  let angle: number;

  do {
    // Generar ángulo aleatorio
    angle = Math.random() * 2 * Math.PI;
    // Generar distancia aleatoria entre minDistance y radius
    distance = minDistance + Math.random() * (radius - minDistance);

    x = MAP_CENTER.x + Math.ceil(Math.cos(angle) * distance);
    y = MAP_CENTER.y + Math.ceil(Math.sin(angle) * distance);
  } while (x === MAP_CENTER.x && y === MAP_CENTER.y);

  return {
    x: Math.max(0, Math.min(MAP_WIDTH - 1, x)),
    y: Math.max(0, Math.min(MAP_HEIGHT - 1, y)),
  };
};
