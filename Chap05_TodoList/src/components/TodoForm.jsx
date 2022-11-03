import React from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useRef } from "react";

function TodoForm(props) {
  const { addTodo } = props;
  const [text, setText] = useState('');
  const inputText = useRef();

  const changeText = useCallback((event) => {
    setText(event.target.value);
  }, []);

  const sendData = (event) => {
    if (text.trim().length === 0) {
      return;
    }

    event.preventDefault();
    addTodo(text);
    setText('');

    inputText.current.focus();
  };

  return (
    <form>
      <div className="input-group">
        {/* 이벤트는 묵시적을 전달되는 이벤트이므로, 이벤트를 매개변수로 받을 필요가 없다. */}
        <input type="text" className="form-control" value={text} onChange={changeText} ref={inputText} />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary mr-1" onClick={sendData}>Submit</button>
        </div>
      </div>
    </form>
  );
}
export default TodoForm;
