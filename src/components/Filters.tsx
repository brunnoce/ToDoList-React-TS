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
  <ul className="filters">
    {
      Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected
        const className = isSelected ? 'selected' : ''

        return (
          <li key={key}>
            <a href={href}
              className={className}
              onClick={(event) => {
                event.preventDefault()
                onFilterChange(key as FilterValue)
              }}
            >
              {literal}
            </a>
          </li>
        )
      })
    }
  </ul>
  )
}