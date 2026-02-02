import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "./services/action/todosAction";

const TodosApp = () => {
  const { isloading, todos, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div>
      <h1>Todos List</h1>
      {isloading && <h2>Loading...</h2>}
      {/* {error && <h2>{error.message}</h2>} */}
      {todos &&
        todos.map((todo) => {
          return <h1 key={todo.id}>{todo.title}</h1>;
        })}
    </div>
  );
};

export default TodosApp;
