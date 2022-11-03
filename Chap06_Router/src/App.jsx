// 기능이 없음.. 나중에 react router config를 공부해보길.

import { lazy, Suspense } from "react";
import { Route, Routes, Link, Navigate, NavLink } from "react-router-dom";
import { Audio, Bars } from 'react-loader-spinner';

import A01FuncProps from './components/A01FuncProps';
import A02FuncState from './components/A02FuncState';
import A03Currency from "./components/A03Currency";
import A04History from "./components/A04History";
import A05Param from "./components/A05Param";
// import A06Arguments from "./components/A06Arguments";
// import A07ChildComponent from "./components/A07ChildComponent";
// import A08Redirect from "./components/A08Redirect";
// import NotFoundComponent from "./components/NotFoundComponent";

// lazy라고 해놓으면, 클릭할 때마다 들어온다.(네크워크에 가보면, lazy로 로드되어 있는 것들은, src_~~~ 라는 것이 나온다.)
// 즉, lazy라고 해놓은게 아니면, 미리 로드되어 있다.
const A06Arguments = lazy(() => import('./components/A06Arguments'));
const A07ChildComponent = lazy(() => import('./components/A07ChildComponent'));
const A08Redirect = lazy(() => import('./components/A08Redirect'));
const NotFoundComponent = lazy(() => import('./components/NotFoundComponent'));


function App() {
  const user = { name: "HungBu", age: 20 };
  const ary = ["a", "b", "c"];
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  const style = { color: 'orange', fontWeight: 'bold' };


  return (
    <div className="m-3">
      <h1>Chap06 Router</h1>

      {/* to는 Route가 설정한 path 이름을 지정한다. */}
      <NavLink to="/" style={props => props.isActive ? style : undefined}>Index</NavLink> | &nbsp;
      <NavLink to="/A01FuncProps">A01FuncProps</NavLink> |  {' '}
      <NavLink to="/A02FuncState">A02FuncState</NavLink> |  {' '}
      <Link to="/A03Currency">A03Currency</Link> |  {' '}
      <Link to="/A04History">A04History</Link> |  {' '}

      {/* Route의 패스(:Name과 같은 변수를 포함)한 모든 패스를 기술할 필요가 있다 */}
      <Link to="/A05Param/1/Song">A05Param</Link> |  {' '}
      <Link to="/A05Param/2/Ra">A05Param</Link> |  {' '}
      <Link to="/A06Arguments?id=3&name=HangDan&address=Seoul#TOP">A06Arguments</Link> |  {' '}
      <Link to="/A07ChildComponent">A07ChildComponent</Link> |  {' '}

      <Link to="/A08Redirect">A08Redirect</Link> |  {' '}

      <Routes>
        {/* 이 파일이 부모가 되고 필요한 값을 props를 통해 전달 가능. */}
        <Route path="/" element={<A01FuncProps name="송"
          age={30}
          arr={ary}
          user={user}
          onAdd={onAdd}
          isChecked={false}
          obj={{ name: 'thd' }}
        />}></Route>
        <Route path="/A01FuncProps" element={<Navigate to="A01FuncProps" />}></Route>
        <Route path="/A02FuncState" element={<A02FuncState />}></Route>
        <Route path="/A03Currency" element={<A03Currency />}></Route>
        <Route path="/A04History" element={<A04History />}></Route>

        {/* 패스를 이용한 데이터 전달. 패스에 :Name 형태는 지정한 이름이 변수명이 되고,
        링크에서 지정한 패스의 값이 이 변수에 대입될 값이 된다.
        아래는 id와 name이 변수명이다. 값은 패스에서 임의의 값으로 설정한다. */}
        <Route path="/A05Param/:id/:name" element={<A05Param />}></Route>
        <Route path="/A05Param/:id/:name" element={<A05Param />}></Route>

        {/* 주소줄의 ?key=value&ky=value... 형태로 값을 전달할 목적으로 사용.
        Route에서는 패스만 정하면 된다. Link에서 전달할 값을 기술한다. */}

        {/* lazy는 suspense와 같이 써야 한다. fallback을 주고 나면, 
            페이지가 로드되기 전에는 fallback 안에 정의된 거가 나온다. */}
        <Route path="/A06Arguments" element={<Suspense fallback={<Bars />}><A06Arguments /></Suspense>}></Route>

        {/* 자식 Routes를 구성 */}
        <Route path="/A07ChildComponent" element={<Suspense fallback={<Bars />}><A07ChildComponent /></Suspense>}>
          {/* 부모와 이름이 동일하면 기본적으로 로드 된다. */}
          <Route path="/A07ChildComponent" element={<div>1</div>}></Route>
          <Route path="/A07ChildComponent/two" element={<div>2</div>}></Route>
          <Route path="three" element={<div>3</div>}></Route>
        </Route>

        <Route path="/A08Redirect" element={<Suspense fallback={<Bars />}><A08Redirect /></Suspense>}></Route>

        {/* 매칭되는 패스가 존재하지 않는 경우 표시할 컴포넌트를 정의 */}
        <Route path="*" element={<Suspense fallback={<Bars />}><NotFoundComponent /></Suspense>}></Route>
      </Routes>
    </div >
  );
}

export default App;

// npm i react-router-dom
// npm i react-loader-spinner -> router를 사용하다가 처리가 늦어질 수 있어 로딩바 호출을 위해 만든 패키지.
