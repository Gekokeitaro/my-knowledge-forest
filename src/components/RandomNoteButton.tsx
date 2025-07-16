'use client';

import type { CollectionEntry, CollectionKey } from 'astro:content';
import { useEffect, useState } from 'react';

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

  function getRandomNote() {
    const filteredCollection = collection.filter(note => {
      const currentNote = window.location.href.split('/').pop();
      return (
        (currentNote === '' && note.data.id !== '000000') ||
        !currentNote?.includes(note.id)
      );
    });

    return filteredCollection[
      Math.floor(Math.random() * filteredCollection.length)
    ];
  }

  useEffect(() => {
    setRandomNote(getRandomNote());
  }, [collection]);

  return (
    (randomNote && (
      <a
        href={
          randomNote.data.id === '000000' ? '/' : `/notes/${randomNote?.id}/`
        }
        className={`bg-[var(--pico-color-2)] text-left p-2 ${className}`}
      >
        🎲 PERDERSE EN EL BOSQUE
      </a>
    )) || (
      <a
        href="#"
        className={`bg-[var(--pico-color-2)] text-left p-2 ${className}`}
      >
        🎲 PERDERSE EN EL BOSQUE
      </a>
    )
  );
}
