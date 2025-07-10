import type { CollectionEntry, CollectionKey } from 'astro:content';
import { useState } from 'react';

type SearchDialogProps<K extends CollectionKey> = {
  collection: CollectionEntry<K>[];
};

export default function SearchDialog<K extends CollectionKey>({
  collection,
}: SearchDialogProps<K>) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const setFilterHandler = (filter: string) => {
    console.log(filter);
    setFilter(filter);
  };

  return (
    <dialog
      className="absolute z-99 top-50 left-200 w-96 h-96 bg-[var(--pico-color-1)] rounded-container p-4 flex flex-col gap-2"
      open
    >
      <header>
        <h2 className="container-title text-[var(--pico-color-8)]">BUSCAR</h2>
        <button className="text-[var(--pico-color-8)] border-2 absolute -right-4 -top-4 rounded-2xl px-2 hover:bg-[var(--pico-color-2)] bg-[var(--pico-color-1)]">
          X
        </button>
      </header>
      <input
        className="w-full text-[var(--pico-color-8)] bg-[var(--pico-color-2)] rounded-2xl px-4"
        placeholder="Buscar"
        type="text"
        onChange={onChange}
        value={search}
      />
      <div className="inline-flex gap-2 flex-wrap">
        <button
          className="text-[var(--pico-color-8)] bg-[var(--pico-color-2)] text-left rounded-xl px-4 hover:bg-[var(--pico-color-3)] focus:bg-[var(--pico-color-4)]"
          onFocus={() => setFilterHandler('sprout')}
        >
          Brotes
        </button>
        <button
          className="text-[var(--pico-color-8)] bg-[var(--pico-color-2)] text-left rounded-xl px-4 hover:bg-[var(--pico-color-3)] focus:bg-[var(--pico-color-4)]"
          onFocus={() => setFilterHandler('saplings')}
        >
          Retoños
        </button>
        <button
          className="text-[var(--pico-color-8)] bg-[var(--pico-color-2)] text-left rounded-xl px-4 hover:bg-[var(--pico-color-3)] focus:bg-[var(--pico-color-4)]"
          onFocus={() => setFilterHandler('evergreen')}
        >
          Árboles
        </button>
        <button
          className="text-[var(--pico-color-8)] bg-[var(--pico-color-2)] text-left rounded-xl px-4 hover:bg-[var(--pico-color-3)] focus:bg-[var(--pico-color-4)]"
          onFocus={() => setFilterHandler('signpost')}
        >
          Direcciones
        </button>
        <button
          className="text-[var(--pico-color-8)] bg-[var(--pico-color-2)] text-left rounded-xl px-4 hover:bg-[var(--pico-color-3)] focus:bg-[var(--pico-color-4)]"
          onFocus={() => setFilterHandler('source')}
        >
          Fuentes
        </button>
        <button
          className="text-[var(--pico-color-8)] bg-[var(--pico-color-2)] text-left rounded-xl px-4 hover:bg-[var(--pico-color-3)] focus:bg-[var(--pico-color-4)]"
          onFocus={() => setFilterHandler('fruit')}
        >
          Frutos
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="flex flex-col gap-2">
          {collection
            .filter(note => {
              return (
                (search.length > 0 &&
                  filter.length > 0 &&
                  note.data.tags.join().includes(filter) &&
                  note.data.title.includes(search)) ||
                (filter.length > 0 &&
                  search.length === 0 &&
                  note.data.tags.join().includes(filter)) ||
                (search.length > 0 &&
                  filter.length === 0 &&
                  note.data.title.includes(search)) ||
                (filter.length === 0 && search.length === 0 && true)
              );
            })
            .map((note: any) => (
              <li
                className="text-[var(--pico-color-8)] text-left px-4 hover:bg-[var(--pico-color-3)] focus:bg-[var(--pico-color-4)]"
                key={note.id}
              >
                <a
                  href={note.data.id === '000000' ? '/' : `/notes/${note?.id}`}
                >
                  {note.data.title}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </dialog>
  );
}
