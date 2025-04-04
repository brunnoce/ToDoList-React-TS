import { Todo as TodoType, TodoId, todoList } from "../types"
import { Todo } from "./Todo"

interface Props {
  todos: todoList
  onToggleCompletedTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo: ({id}: TodoId) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompletedTodo }) => {
  return (
    <ul className="space-y-2 p-4">
      {todos.map(todo => (
        <li key={todo.id} className={`p-2 ${todo.completed ? 'bg-gray-200' : 'bg-white'} rounded-lg shadow-md`}>
          <Todo 
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onToggleCompletedTodo={onToggleCompletedTodo}
            onRemoveTodo={onRemoveTodo}
          />
        </li>
      ))}
    </ul>
  )
}
