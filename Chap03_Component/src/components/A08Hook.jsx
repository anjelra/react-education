import React, { useCallback, useEffect } from "react";
import { useReducer } from "react";

const changeValue = (state, action) => {
  switch (action.type) {
    case 'CHANGE_NUMBER':
      return { ...state, num: Number(action.payload) };

    case 'CHANGE_STR':
      return { ...state, str: action.payload };

    case 'CHANGE_DATE':
      return { ...state, today: action.payload };

    case 'CHANGE_ALL':
      return { ...state, [action.payload.name]: action.payload.value };

    default:
      return state;
  }
};

function A08Hook() {
  // const [변수명(객체), data를 변경할 함수 호출을 위한 함수] = useReducer(data를 변경할 함수, view에 반영할 값)
  const [data, dispatch] = useReducer(changeValue, {
    num: 0,
    str: 'Hello World',
    age: 0,
    list: [],
    today: new Date()
  });

  // useCallback은 이벤트 의존관계 정의.
  const changeNumber = useCallback((event) => {
    dispatch({ type: 'CHANGE_NUMBER', payload: event.target.value });
  }, []);

  const changeString = useCallback((event) => {
    dispatch({ type: 'CHANGE_STR', payload: event.target.value });
  }, []);

  const changeAll = useCallback((event) => {
    dispatch({ type: 'CHANGE_ALL', payload: event.target });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'CHANGE_DATE', payload: new Date() });
    }, 2000);
  }, []);

  return (
    <div>
      <h3>A08. Reducer</h3>

      <div>
        Num: {data.num} / {typeof data.num}
        <input type="text" name="num" className="form-control" value={data.num} onChange={changeNumber} />
        <br />

        Str: {data.str}
        <input type="text" name="str" className="form-control" value={data.str} onChange={changeString} />
        <br />

        Today: {data.today.toLocaleString()} <br />
        <br />

        Avg: {data.avg}
        <div className="input-group">
          <input type="text" name="avg" className="form-control" value={data.avg} onChange={changeAll} />
          <button className="btn btn-outline-primary btn-sm">ADD</button>
        </div>
      </div>
    </div>
  );
}
export default A08Hook;
