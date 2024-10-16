import React from 'react'
import ToDoItem from './ToDoItem'
import { useSelector } from 'react-redux'

function ToDoList() {
  const {todolist}=useSelector(state=>state.todo)
  return (
    <div className='mt-4'>
      {
        todolist.map(todoobj=><ToDoItem todo={todoobj.todo} id={todoobj.id}/>)
      }
    </div>
  )
}

export default ToDoList