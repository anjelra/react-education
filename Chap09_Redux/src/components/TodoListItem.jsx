import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodoAction, updateTodoAction } from "../modules/todoListR";
import "./css/todos.css";

function TodoListItem(props) {
  const { todo } = props;

  // dispatch 함수를 hook으로 참조(action을 할 때는 useDispatch 에서만 꺼내오면 된다.)
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{todo.id}</td>
      <td>
        <span className={todo.done ? 'done' : undefined}>{todo.text}</span>
      </td>
      <td>
        <button className="btn btn-primary" onClick={() => dispatch(updateTodoAction(todo.id))}>Complete</button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => dispatch(deleteTodoAction(todo.id))}>Delete</button>
      </td>
    </tr>
  );
}
export default React.memo(TodoListItem);
