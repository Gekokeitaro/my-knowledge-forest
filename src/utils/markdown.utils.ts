import type { CollectionEntry, CollectionKey } from 'astro:content';
import type { MarkdownLink } from '../types/general.types';
import {
  MARKDOWN_LINK_REGEX,
  NOTE_TYPES,
} from '../constants/general.constants';

const LINK_META_POSITION = {
  PATH: 2,
  TEXT: 1,
};

export const getMarkdownLinks = (body: string): Map<string, string> => {
  const markdownLinks = new Map<string, string>();

  [...body.matchAll(MARKDOWN_LINK_REGEX)].map(match => {
    markdownLinks.set(
      match[LINK_META_POSITION.PATH],
      match[LINK_META_POSITION.TEXT]
    );
  });

  return markdownLinks;
};

export const getOutgoingLinks = (body: string): MarkdownLink[] => {
  return Array.from(getMarkdownLinks(body), ([path, text]) => {
    return { path, text, type: NOTE_TYPES.UNKNOWN } satisfies MarkdownLink;
  });
};

export const getIngoingLinks = <K extends CollectionKey>(
  targetPath: string,
  notesCollection: CollectionEntry<K>[]
): MarkdownLink[] => {
  return [];
};
