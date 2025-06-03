import type { Vector2 } from '../types/general.types';

export const MAP_WIDTH = 7;
export const MAP_HEIGHT = 15;

export const MAP_CENTER: Vector2 = {
  x: Math.floor(MAP_WIDTH / 2),
  y: Math.floor(MAP_HEIGHT / 2),
};

export const TILE_TYPES = {
  PLAYER: '@',
  EMPTY: '.',
  SPROUT: '🌱',
  SAPLING: '🌳',
  EVERGREEN: '🌲',
  FRUIT: '🍎',
  SIGNPOST: '🪧',
  SPRING: '🌊',
  UNKNOWN: '❔',
};
