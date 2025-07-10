import { useState } from 'react';
import FilterButton from './FilterLabel';

interface FilterMenuProps {
  onFilterChange: (filter: string) => void;
  filterList: { label: string; value: string }[];
}

export default function FilterMenu({
  onFilterChange,
  filterList,
}: FilterMenuProps) {
  const [currentFilter, setCurrentFilter] = useState<string>('');

  const filterHandler = (filter: string) => {
    if (currentFilter === filter) {
      setCurrentFilter('');
      onFilterChange('');
      return;
    }
    setCurrentFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="inline-flex gap-2 flex-wrap">
      {filterList.map((filter: { label: string; value: string }) => (
        <FilterButton
          key={filter.value}
          filterHandler={filterHandler}
          filter={filter.value}
          filterLabel={filter.label}
          checked={filter.value === currentFilter}
        />
      ))}
    </div>
  );
}
