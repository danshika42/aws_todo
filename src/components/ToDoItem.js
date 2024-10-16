import React from 'react'
import { useDispatch } from 'react-redux'
import { remove_todo } from '../features/todo/TodoSlice';

function ToDoItem({todo,id}) {
  const dispatch=useDispatch();
  return (
    <div className='flex justify-between items-center m-2'> 
      <p>{todo}</p>
      <button className='bg-orange-400 p-1 rounded-md ml-2' onClick={()=>dispatch(remove_todo(id))}>Remove</button>
    </div>
  )
}

export default ToDoItem