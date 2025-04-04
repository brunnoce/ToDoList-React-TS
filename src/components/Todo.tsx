import React from 'react'
import { TodoId, Todo as TodoType} from '../types'

interface Props extends TodoType{
  onToggleCompletedTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo: ({id}: TodoId) => void
}

export const Todo: React.FC<Props> = ({id, title, completed, onRemoveTodo, onToggleCompletedTodo}) => {
  
  // const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
  //   onToggleCompletedTodo({
  //     id,
  //     completed: event.target.checked
  //   })
  // }
  
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
      <input
        className="mr-3"
        type="checkbox"
        checked={completed}
        onChange={(event) => onToggleCompletedTodo({id, completed: event.target.checked})} 
      />
      <label className={`flex-1 ${completed ? "line-through text-gray-500" : "text-gray-900"}`}>{title}</label>
      <button 
        className="text-red-500 hover:text-red-700 transition"
        onClick={() => onRemoveTodo({id})}
      >
        ❌
      </button>
    </div>
  )
} 