import React from "react";
import { useState } from "react";
import TodoForm from "./TodoForm";
import Todolist from "./TodoList";
import { useCallback } from "react";
import { useRef } from "react";

const makeTodo = () => {
  const todos = [];

  for (let i = 1; i <= 5; i++) {
    todos.push({ id: i, text: `${i}번째 할 일`, done: false });
  }
  return todos;
};

const TodoTemplate = () => {
  const [todoList, setTodoList] = useState(makeTodo());
  const cnt = useRef(6);

  // ! 항상 변경되는 애들임. 따라서 최적화를 시켜줘야함
  // 최적화 전..
  // const changeComplete = id => {
  //   const todos = todoList.map(todo => {
  //     if (todo.id === id) {
  //       return { ...todo, done: !todo.done };
  //     } else {
  //       return todo;
  //     }
  //   });

  //   setTodoList(todos);
  // };

  // ! 책 기준 한줄짜리 임.
  // const changeComplete = id => setTodoList(todoList.map(todo => todo.id === id ? {...todo, done: !todo.done}: todo));


  // 최적화를 시도 했으나 별 효과는 없음..
  // 이렇게 두번쨰 인자에 todoList를 주게 되면 어짜피 todoList 변경하면 새로 그리라는 뜻이기 때문에 하나 마나 memo의 영향을 받지 않는다.
  // 한번만 만들 수 있게, 두번쨰 인자도 비워줘야 하는데... 어떻게 해야 할까...?
  // const changeComplete = useCallback((id) => {
  //   const todos = todoList.map(todo => {
  //     if (todo.id === id) {
  //       return {...todo, done: !todo.done};
  //     } else {
  //       return todo;
  //     }
  //   });

  //   setTodoList(todos);
  // }, [todoList]);

  // ! 이렇게 하면, 두번째 인자도 필요 없고 최적화도 완료 되었다!!!!
  const changeComplete = useCallback((id) => {
    // callback은 자기랑 같이 선언된 값을 쌍으로 받아서 가지고 있다. 따라서, 굳이 선언을 안해줘도 된다.
    setTodoList(todoList => {
      return todoList.map(todo => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      });
    });
  }, []);


  // 최적화 전
  // const deleteTodo = (id) => {
  //   const todos = todoList.filter(todo => todo.id !== id);

  //   setTodoList(todos);
  // };

  // 최적화 후.
  const deleteTodo = useCallback((id) => {
    setTodoList(todoList => {
      return todoList.filter(todo => todo.id !== id);
    })
  }, []);

  const addTodo = (text) => {
    const todo = { id: cnt.current++, text: text, done: false };

    setTodoList(todoList.concat(todo));
  };

  return (
    <div>
      <h3>Todo List</h3>

      <TodoForm addTodo={addTodo}></TodoForm>

      <br />

      <hr />

      <Todolist todoList={todoList} changeComplete={changeComplete} deleteTodo={deleteTodo}></Todolist>
    </div>
  );
};
export default TodoTemplate;
