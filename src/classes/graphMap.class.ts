import { TILE_TYPES } from '../constants/general.constants';
import type { MapCell } from '../types/general.types';

export class GraphMap {
  private map: MapCell[][];

  constructor(mapHeight: number, mapWidth: number) {
    this.map = Array(mapHeight)
      .fill(null)
      .map((_, rowIndex) =>
        Array(mapWidth)
          .fill(null)
          .map((_, columnIndex) => ({
            tile: TILE_TYPES.EMPTY,
            text: '',
            url: '#',
            urlActive: false,
            exists: false,
            target: undefined,
            position: { x: columnIndex, y: rowIndex },
          }))
      );
  }

  getMap(): MapCell[][] {
    return this.map;
  }

  setCell(row: number, column: number, cell: MapCell) {
    this.map[row][column] = cell;
  }

  getCell(row: number, column: number): MapCell {
    return this.map[row][column];
  }
}
