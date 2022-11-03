import React from "react";
import TodoListItem from "./TodoListItem";

// 페이징 처리 하고 싶으면, react-paginate 을 사용하면 된다.(npm i react-paginate)

function Todolist(props) {
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
          {/* 이렇게 해도 되지만, 이러면 todoList가 변경되면
            전부다 새로 그리기 때문에 최적화를 위해 TodoListItem.jsx 파일을 만든 것임. */}
          {/* {props.todoList.map((item, index) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.text}</td>
              <td>{item.done ? '완료' : '미완료'}</td>
              <td>{item.id}</td>
            </tr>
          ))} */}
          {props.todoList.map((item, index) => (
            <TodoListItem key={item.id} todo={item} changeComplete={props.changeComplete} deleteTodo={props.deleteTodo}></TodoListItem>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Todolist;
