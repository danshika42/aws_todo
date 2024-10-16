import { configureStore } from "@reduxjs/toolkit";
import todoreducer from '../features/todo/TodoSlice'

export default configureStore({
    reducer:{
        todo:todoreducer
    }
})