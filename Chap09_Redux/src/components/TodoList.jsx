import React from "react";
import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";

function Todolist() {
  // 클래스 base 에서는 connect에 state, dispatch 를 적용해줘야 하는데,
  // 훅을 쓰게 되면 useSelector를 통해 값을 쉽게 꺼내올 수 있다.
  const { todoList } = useSelector(state => state.todoListR);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: "10%" }}>ID</th>
            <th>Todo</th>
            <th style={{ width: "10%" }}>Complete</th>
            <th style={{ width: "10%" }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
        </tbody>
      </table>
    </div>
  );
}
export default Todolist;
