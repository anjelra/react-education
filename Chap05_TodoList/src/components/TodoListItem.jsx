import React from "react";
import "./css/todos.css";

// 함수형이니까, 부모의 TodoList에서 받은 것을 props로 선언해야 한다.
// 또는, {todo} 라고 받아도 됨. 그러면 넘긴 todo가 나옴.
function TodoListItem(props) {
  const { todo, changeComplete, deleteTodo } = props;

  return (
    <tr>
      <td>{todo.id}</td>
      <td>
        <span className={todo.done ? 'done' : undefined}>{todo.text}</span>
      </td>
      <td>
        <button className="btn btn-primary" onClick={() => changeComplete(todo.id)}>Complete</button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
      </td>
    </tr >
  );
};

// 메모제이션이라고 해서 이걸 해서 최적화를 해준다.
// props의 값이 변경되지 않아야 이 memo가 기존의 컴포넌트를 재 사용한다.(그런데, TodoTemplate.jsx에서
// todoList를 추가, 삭제 한 경우에 최적화를 안해주면 즉, 계속 새로 그리게 되면 props의 주소값이 변경되었기 때문에
// memo만 적어주면 의미가 없다.)
export default React.memo(TodoListItem);
