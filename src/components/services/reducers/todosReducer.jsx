import { TODOS_REQUEST, TODOS_SUCCESS } from "../constants/todosConstant";
import { TODOS_FAILURE } from "./../constants/todosConstant";

const initialState = {
  isloading: false,
  todos: [],
  error: null,
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_REQUEST:
      return {
        ...state,
        isloading: true,
      };
    case TODOS_SUCCESS:
      return {
        todos: action.payload,
        isloading: false,
        error: null,
      };
    case TODOS_FAILURE:
      return {
        isloading: false,
        todos: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default todosReducer;
