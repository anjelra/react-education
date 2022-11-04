import { useRef } from "react";
import { useState, useCallback } from "react";
import { createContext } from "react";

const TodoListContext = createContext({
  state: {
    todoList: [],
    text: ''
  },
  action: {
    updateTodo: id => { },
    deleteTodo: id => { },
    addTodo: id => { },
    changeText: text => { }
  }
});




// hook을 쓰는 경우에는, Consumer를 만들수 없다.
function TodoListProvider(props) {
  const makeTodo = () => {
    const todos = [];

    for (let i = 1; i <= 5; i++) {
      todos.push({ id: i, text: `${i}번째 할 일`, done: false });
    }
    return todos;
  };


  const [todoList, setTodoList] = useState(makeTodo());
  const [text, setText] = useState('');
  const cnt = useRef(6);


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

  const changeText = useCallback((text) => {
    setText(text);
  }, []);

  const todoListData = {
    state: { todoList, text },
    action: { changeComplete, deleteTodo, addTodo, changeText }
  };

  return (
    <TodoListContext.Provider value={todoListData}>
      {props.children}
    </TodoListContext.Provider>
  );
}
// TodoListProvider => 제공자
// TodoListContext => 수신자(훅을 쓰기 위한... 훅을 안쓰는 경우에는 Context를 붙여서 내보내야 하지만... 훅인 경우에는 안붙인 원 데이터를 내보내야 한다.)
export { TodoListProvider, TodoListContext };