import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { add_todo } from '../features/todo/TodoSlice';

function AddItem() {
  const [data,ChangeData]=useState('');
  const dispatch=useDispatch();
  function addTodo(todo){
    dispatch(add_todo(todo))
    ChangeData('');
  }
  return (
    <div className=''>
      <input className='border-black border-solid border-1 p-1 rounded-md' type='text' value={data} onChange={(e)=>ChangeData(e.target.value)} />
      <button className='bg-orange-400 p-[0.38rem] rounded-md ml-2' onClick={()=>addTodo(data)}>Add</button>
    </div>
  )
}

export default AddItem