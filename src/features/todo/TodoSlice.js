import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'

const TodoSlice=createSlice({
    name:'todo',
    initialState:{
        todolist:[
            {todo:"Do DSA",id:uuidv4()}
        ]
    },
    reducers:{
        add_todo:(state,action)=>{
            state.todolist=[...state.todolist,{todo:action.payload,id:uuidv4()}]
        },
        remove_todo:(state,action)=>{
            const newtodoArray=state.todolist.filter((todoObj)=>todoObj.id!=action.payload)
            state.todolist=newtodoArray
        }
    }
}) 

export const {add_todo,remove_todo}=TodoSlice.actions;

export default TodoSlice.reducer