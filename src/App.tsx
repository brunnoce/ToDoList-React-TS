import { useState } from 'react'
import { Todos } from './components/Todos'
import { TodoId, Todo, FilterValue, TodoTitle } from './types'
import { TODO_FILTERS } from './consts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './index.css';

const mockTodos = [
  {
    id: '1',
    title: 'Práctica de TypeScript',
    completed: true
  },
  {
    id: '2',
    title: 'Práctica React',
    completed: false
  },
  {
    id: '3',
    title: 'Aprender Node.js',
    completed: false
  }
]

const App = () => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({id}: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  // const handleCompleted = ({id, completed}: {id: TodoId, completed: TodoCompleted}
  const handleCompleted = ({id, completed}: Pick<Todo, 'id' | 'completed'>) => {
    const newTodos = todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })

    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = () => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = ({title}: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
      <div className="todoapp bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <Header onAddTodo={handleAddTodo} />
        <Todos 
          onToggleCompletedTodo={handleCompleted}
          onRemoveTodo={handleRemove}
          todos={filteredTodos} 
        />
        <Footer 
          activeCount={activeCount}
          completedCount={completedCount}
          filterSelected={filterSelected}
          onClearCompleted={handleRemoveAllCompleted}
          handleFilterChange={handleFilterChange}
        />
      </div>
  )
}

export default App