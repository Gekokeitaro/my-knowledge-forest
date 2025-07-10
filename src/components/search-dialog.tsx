import type { CollectionEntry, CollectionKey } from 'astro:content';
import { useState } from 'react';
import FilterMenu from './FilterMenu';
import { noteFilters } from '../constants/general.constants';

type SearchDialogProps<K extends CollectionKey> = {
  collection: CollectionEntry<K>[];
};

export default function SearchDialog<K extends CollectionKey>({
  collection,
}: SearchDialogProps<K>) {
  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filterChangeHandler = (filter: string) => {
    setFilter(filter);
  };

  return (
    <dialog
      className="absolute z-99 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[var(--pico-color-1)] rounded-container p-4"
      open
    >
      <header>
        <h2 className="container-title text-[var(--pico-color-8)]">BUSCAR</h2>
        <button className="text-[var(--pico-color-8)] border-2 absolute -right-4 -top-4 rounded-2xl px-2 hover:bg-[var(--pico-color-2)] bg-[var(--pico-color-1)]">
          X
        </button>
      </header>
      <section className="flex flex-col gap-4">
        <input
          className="w-full text-[var(--pico-color-8)] bg-[var(--pico-color-2)] rounded-2xl px-4"
          placeholder="Buscar"
          type="text"
          onChange={onChange}
          value={search}
        />
        <FilterMenu
          onFilterChange={filterChangeHandler}
          filterList={noteFilters}
        />
        <div className="flex-1 overflow-y-auto flex flex-row flex-wrap gap-4">
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
              <a
                href={note.data.id === '000000' ? '/' : `/notes/${note?.id}`}
                className="text-[var(--pico-color-8)] border-[var(--pico-color-8)] flex flex-col p-4 border-2 rounded-lg hover:bg-[var(--pico-color-2)] transition-colors w-48 h-24"
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="font-bold text-center">{note.data.title}</h3>
                  {'description' in note.data && note.data.description && (
                    <p className="text-sm text-[var(--pico-color-7)]">
                      {note.data.description}
                    </p>
                  )}
                </div>
              </a>
            ))}
        </div>
      </section>
    </dialog>
  );
}
