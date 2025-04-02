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
    <div className='view'>
      <input
        className='toggle'
        type='checkbox'
        checked={completed}
        onChange={(event) => {
          onToggleCompletedTodo({id, completed: event.target.checked})
        }} 
        // onChange={handleChangeCheckbox} 
      />
      <label>{title}</label>
      <button 
        className='destroy' 
        onClick={() => {
          onRemoveTodo({id})
        }}/>
    </div>
  )
} 