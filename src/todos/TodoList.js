import React from 'react'
import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'

const TodoList = ({todos = []}) => {
  return (
    <div className="liast-wrapper">
      <NewTodoForm />
      {todos.map( todo => <TodoListItem todo={todo} />)}
    </div>
  )
}

export default TodoList
