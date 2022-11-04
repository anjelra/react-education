import React, { useRef } from 'react'
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTexAction, addTodoAction } from '../modules/todoListR';

function TodoForm() {
  const inputFiled = useRef();

  const { text } = useSelector(state => state.todoListR);

  const dispatch = useDispatch();

  const sendData = useCallback((evt) => {
    evt.preventDefault();

    dispatch(addTodoAction(text));
    dispatch(changeTexAction(''));
    inputFiled.current.focus();
  }, [dispatch, text]);

  return (
    <form>
      <div className="input-group">
        <input type="text" className="form-control" ref={inputFiled} value={text} onChange={(evt) => dispatch(changeTexAction(evt.target.value))} />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary mr-1" onClick={sendData}>Submit</button>
        </div>
      </div>
    </form>
  )
}
export default TodoForm;
