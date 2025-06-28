import type { CollectionEntry, CollectionKey } from 'astro:content';
import { useState } from 'react';

type RandomNoteProps<K extends CollectionKey> = {
  className?: string;
  collection: CollectionEntry<K>[];
};

export default function RandomNoteButton<K extends CollectionKey>({
  className,
  collection,
}: RandomNoteProps<K>) {
  const [randomNote, setRandomNote] = useState<CollectionEntry<K>>(
    collection[Math.floor(Math.random() * collection.length)]
  );

  return (
    <a
      href={
        randomNote.data.id === '000000' ? '/' : `/notes/${randomNote?.id}`
      }
      className={`bg-[var(--pico-color-2)] text-left p-2 ${className}`}
    >
      🎲 PERDERSE EN EL BOSQUE
    </a>
  );
}
