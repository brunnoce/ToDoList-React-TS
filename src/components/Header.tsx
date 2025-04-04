import React from 'react'
import { TodoTitle } from '../types'
import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: ({title}: TodoTitle) => void
}

export const Header: React.FC<Props> = ({onAddTodo}) => {
  return (
    <header className="bg-gray-600 text-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center">TODO LIST</h2>
      <CreateTodo saveTodo={onAddTodo}/>
    </header>
  )
}
