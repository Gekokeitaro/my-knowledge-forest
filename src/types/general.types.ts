import type { CollectionEntry, CollectionKey } from 'astro:content';
import { NOTE_TYPES, TILE_TYPES } from '../constants/general.constants';

export type Vector2 = {
  x: number;
  y: number;
};

export type MarkdownLink = {
  path: string | undefined;
  text: string;
  type: (typeof TILE_TYPES)[keyof typeof TILE_TYPES];
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

export type Note<K extends CollectionKey> = CollectionEntry<K> & {
  outgoingLinks: MarkdownLink[];
  ingoingLinks: MarkdownLink[];
};

export type NoteHeaderMetadata = {
  title: string;
  created: Date;
  modified: Date;
  tags: string[];
  type: string;
};
