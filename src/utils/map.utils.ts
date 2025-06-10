import {
  MAP_CENTER,
  MAP_HEIGHT,
  MAP_WIDTH,
} from '../constants/general.constants';
import type { Vector2 } from '../types/general.types';

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
