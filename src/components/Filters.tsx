import React from 'react'
import { FilterValue } from '../types'
import { FILTERS_BUTTONS } from '../consts'

interface Props {
  // filterSelected: 'all' | 'active' | 'completed' EL PROBLEMA AQUI SERÍA QUE TENDRIAMOS QUE AGREGAR A MANO AL MODIFICARLOS EN TODO_FILTERS
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}

// export const Filters = ({filterSelected, onFilterChange}: Props)
export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {

  return (
    <ul className="flex gap-2 justify-center">
    {Object.entries(FILTERS_BUTTONS).map(([key, { literal }]) => {
      const isSelected = key === filterSelected;

      return (
        <li key={key}>
          <button
            onClick={(event) => {
              event.preventDefault();
              onFilterChange(key as FilterValue);
            }}
            className={`px-4 py-2 rounded-lg transition ${
              isSelected
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {literal}
          </button>
        </li>
      );
    })}
  </ul>
  )
}