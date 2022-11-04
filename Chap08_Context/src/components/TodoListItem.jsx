import React, { useContext } from "react";
import { TodoListContext } from "../contexts/TodoListContext";
import "./css/todos.css";

function TodoListItem(props) {
  const { todo } = props;
  const { action } = useContext(TodoListContext);

  return (
    <tr>
      <td>{todo.id}</td>
      <td>
        <span className={todo.done ? 'done' : undefined}>{todo.text}</span>
      </td>
      <td>
        <button className="btn btn-primary" onClick={() => action.changeComplete(todo.id)}>Complete</button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => action.deleteTodo(todo.id)}>Delete</button>
      </td>
    </tr>
  );
}
export default React.memo(TodoListItem);
