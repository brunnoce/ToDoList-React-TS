import React, { useState } from 'react'
import { TodoTitle } from '../types'

interface Props {
  saveTodo: ({title}: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({saveTodo}) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    saveTodo({title: inputValue})
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4">
      <input 
        className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Agregar nuevo ToDo"
        autoFocus
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        Agregar
      </button>
    </form>
  )
}
