import { TILE_TYPES } from '../constants/general.constants';

export type Vector2 = {
  x: number;
  y: number;
};

export type OutgoingLink = {
  text: string;
  url: string;
  depth: number;
  type: (typeof TILE_TYPES)[keyof typeof TILE_TYPES];
  exists: boolean;
};

export type MapCell = {
  tile: (typeof TILE_TYPES)[keyof typeof TILE_TYPES];
  text: string;
  url: string;
  urlActive: boolean;
  exists: boolean;
  target: string | undefined;
  position: Vector2;
};
