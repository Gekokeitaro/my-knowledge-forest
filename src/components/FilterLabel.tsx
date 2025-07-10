import type { JSX } from 'react';

interface FilterButtonProps {
  filterHandler: (filter: string) => void;
  filter: string;
  filterLabel: string;
  checked?: boolean;
  className?: string;
}
export default function FilterButton({
  filterHandler,
  filter,
  filterLabel,
  className,
  checked = false,
}: FilterButtonProps): JSX.Element {
  return (
    <label
      className={`text-[var(--pico-color-8)] ${checked ? 'bg-[var(--pico-color-13)]' : 'bg-[var(--pico-color-2)]'} text-left rounded-xl px-4 hover:bg-[var(--pico-color-13)] `}
    >
      <input
        type="checkbox"
        onClick={() => filterHandler(filter)}
        checked={checked}
        className="hidden"
      />
      <span>{filterLabel}</span>
    </label>
  );
}
