// ! 총 정리

/**
 * ! useMemo, useCallback, useEffect, useReducer 는 두번째 파라미터에 빈값을 주게 되면 최초 로드될 떄 한번만 실행된다.
 * 
   useMemo 
    - 일반함수의 의존관계 정의.(렌더링 될 때마다 함수를 새로 만들 필요가 없으니, 특정 state에 의존성을 부여하는 것임.)
   useCallback 
    - 이벤트 의존관계 정의.(렌더링 될 때마다 함수를 새로 만들 필요가 없으니, 특정 state에 의존성을 부여하는 것임.)
   useEffect 
    - 라이프 스코프 정의.(렌더링 될 때마다 함수를 새로 만들 필요가 없으니, 특정 state에 의존성을 부여하는 것임.)
   useState 
    - 변수 값 바뀌면 화면 렌더링.
   useRef 
    - 값을 키핑할 목적 또는 DOM 객체를 바인딩할 목적.
   useReducer (이벤트 핸들러를 분리해서 사용하는 것임.)
    - 화면에서만 쓰겠다 하면 useReducer. 전체적으로 관리하겠다 하면 Redux를 사용하면 됨.(사용방법은 동일.)
 * 
 */

import React from "react";
import { useRef } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

function A07Hook() {
  // useState => 변수의 값이 변경되면 그 값을 유지하면서 변경된 값으로 화면 리 렌더링.
  const [data, setData] = useState({
    num: 100,
    str: 'Hello World',
    avg: 0,
    list: []
  });

  const [today, setToday] = useState(new Date());

  // useRef (값은 kepping하는데, 화면 렌더링을 하지 않는다.)
  // useState와 같이 값은 유지되지만 값이 변경되더라도 화면 리 렌더링을 하지 않는다.
  const cnt = useRef(0);

  // <input type="text" ref={numRef} .../>
  const numRef = useRef();    // DOM요소를 참조할 목적. numRef가 달린 DOM 객체가 값으로 바인딩 된다.




  // useState의 값을 변경할 이벤트 핸들러.
  // useCallback( () => {}, [의존관계])
  // useCallback( () => {}, []) => 의존관계 없음. 최초 1번만 만들어진다.
  // 참조하는 변수값도 최초 만들어질 때 정의된 값으로 참조된다.
  // ! event 핸들러의 경우 렌더링 될때마다 새롭게 만들 필요가 없기 때문에 최초 한번만 만들면(값은 유지 해야됨.) 된다.
  // 
  const changeNumber = useCallback((event) => {
    setData({ ...data, [event.target.name]: Number(event.target.value) });
  }, [data]);

  const addList = useCallback(() => {
    setData(data => {
      return { ...data, list: data.list.concat(data.avg) }
    })
  }, []);

  // useState의 Setter 함수 내부에 익명 함수 형태로 사용할 수 있다.
  // 이때 매개변수로 함께 기술된 변수(data)를 받아 사용 => 의존관계를 제거할 수 있음 **
  // const changeString = event => setData({ ...data, [event.target.name]: event.target.value });
  // 이벤트발견되면 event 가 매개변수로 들어오는 것처럼, 이 또한 setData와 함께 기술한 data가 매개변수로 들어온다.

  // const changeString = event => setData(data => {
  //   return { ...data, [event.target.name]: event.target.value };
  // }, []);

  const changeString = useCallback(event => setData(data => ({ ...data, [event.target.name]: event.target.value })), []);



  // useEffect()
  // window의 onload 이벤트와 비슷한 동작. 함수가 호출될 떄 실행해야 할 명령을 기술한다.
  // []에 변수, 함수가 기술되면 리 렌더링될 떄 재실행된다.
  // []에 의존 관계가 없으면 처음 로드될 때 한번만 실행된다.

  // 지정한 데이터가 업데이트가 된 후에 실행할 명령 -> class 에서의 componentDidUpdate()
  useEffect(() => {
    setTimeout(() => {
      setToday(new Date());
    }, 2000);
  }, [data]);

  // 목적에 따라 나누어 기술할 수 있음
  // 컴포넌트가 다 로드된 후(view가 만들어진 후)에 실행할 명령이 있는 경우 -> componentDidMount()
  useEffect(() => {
    cnt.current++;

    numRef.current.style.background = 'orange';
  }, []);

  // 일반 함수
  const getAverage = (list) => {
    if (list.length === 0) {
      return;
    }

    const total = list.reduce((sum, item) => {
      return sum + item
    }, 0);

    return total;
  };

  // 일반 함수가 view에서 호출될 때 의존관계가 있는 변수가 변경될때만  호출되도록 정의 => useMemo
  // 정의는 함수 형태지만 참조는 속성 형태로 사용한다.
  const getAverageMemo = useMemo(() => {
    return getAverage(data.list);
  }, [data.list]);

  return (
    <div>
      <h3>A07. useState, useEffect</h3>

      <div>
        Num: {data.num}
        <input type="text" name="num" className="form-control" onChange={changeNumber}
          ref={numRef} />
        <br />

        Str: {data.str}
        <input type="text" name="str" className="form-control" onChange={changeString} />
        <br />

        Today: {today.toLocaleString()} <br />
        <br />

        Avg: {data.avg} / {getAverageMemo}
        <div className="input-group">
          {/* 값이 변경되는 경우에는 value와 이벤트 트리거를 같이 주면되고,
            값이 변경되지 않는 경우에는 defaultValue를 쓰면 된다. */}
          <input type="text" name="avg" className="form-control" value={data.avg} onChange={changeNumber} />
          <button className="btn btn-outline-primary btn-sm" onClick={addList}>ADD</button>
        </div>
      </div>

      {data.list.map((item, index) => {
        return <span key={index}>{item}</span>;
      })}
    </div>
  );
}
export default A07Hook;
