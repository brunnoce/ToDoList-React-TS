import { FilterValue } from "../types"
import { Filters } from "./Filters"
import { Badge } from "flowbite-react";
import { HiClock } from "react-icons/hi";

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  onClearCompleted: () => void
  handleFilterChange: (filter: FilterValue) => void
}

export const Footer: React.FC<Props> = ({
  activeCount = 0, 
  completedCount = 0,
  filterSelected,
  handleFilterChange,
  onClearCompleted
}) => {
    return(
      <footer className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow">
        <span className="todo-count">
          <Badge icon={HiClock} color="gray"><strong>{activeCount}</strong> tareas pendientes</Badge>
        </span>
        <Filters filterSelected={filterSelected} onFilterChange={handleFilterChange} />
        {completedCount > 0 && (
          <button 
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            onClick={onClearCompleted}
          >
            Borrar completadas
          </button>
        )}
      </footer>
    )
}