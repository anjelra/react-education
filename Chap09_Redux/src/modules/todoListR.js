import { createAction, handleActions } from "redux-actions";

const TODOLIST_ADDTODO = "TODOLIST/ADDTODO";
const TODOLIST_UPDATETODO = "TODOLIST/UPDATETODO";
const TODOLIST_DELETETODO = "TODOLIST/DELETETODO";
const TODOLIST_CHANGETEXT = "TODOLIST/CHANGETEXT";

// state 작업은 할 수 없음. state 반영 이외의 작업을 여기서 실행.
// export const updateTodoAction = id => ({type:TODOLIST_UPDATETODO, payload: id });
export const updateTodoAction = createAction(TODOLIST_UPDATETODO, (id) => id);
export const deleteTodoAction = createAction(TODOLIST_DELETETODO, (id) => id);
export const addTodoAction = createAction(TODOLIST_ADDTODO, (text) => {
  const todo = { id: cnt++, text: text, done: false };

  return todo;
});
export const changeTexAction = createAction(
  TODOLIST_CHANGETEXT,
  (text) => text
);

const makeTodo = () => {
  const todos = [];
  for (var i = 1; i <= 5; i++) {
    todos.push({ id: i, text: `${i}번째 할 일 `, done: false });
  }
  return todos;
};

let cnt = 6;

const init = {
  todoList: makeTodo(),
  text: "",
};

const todoListR = handleActions(
  {
    [TODOLIST_ADDTODO]: (state, action) => {
      return { ...state, todoList: state.todoList.concat(action.payload) };
    },
    [TODOLIST_UPDATETODO]: (state, action) => {
      // createAction의 action의 값은 payload라는 이름으로 전달한다.
      const todos = state.todoList.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
      return { ...state, todoList: todos };
    },
    [TODOLIST_DELETETODO]: (state, action) => {
      const todos = state.todoList.filter((todo) => todo.id !== action.payload);
      return { ...state, todoList: todos };
    },
    [TODOLIST_CHANGETEXT]: (state, action) => {
      return { ...state, text: action.payload };
    },
  },
  init
);

export default todoListR;
