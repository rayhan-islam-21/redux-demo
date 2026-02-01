import axios from "axios";
import { TODOS_FAILURE, TODOS_REQUEST, TODOS_SUCCESS } from "../constants/todosConstant";

 export const getAllTodos = () => async (dispatch) => {
   dispatch({type:TODOS_REQUEST});
  try {
     const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
   dispatch({type:TODOS_SUCCESS,payload:res.data})
    
  } catch (error) {
    dispatch({type:TODOS_FAILURE,payload:error.message})
  }
}