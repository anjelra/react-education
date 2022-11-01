// ! 보통 App.js는 view를 통합하는 역할을 함.

// JSX 문법
// 1. DOM에 ""을 사용하지 않고 변수의 값으로 할당 가능.
/*
const elem = <div>Hello World 01</div>;

// 함수 또는 클래스 형태로 값이 리턴되어야 한다.
// 이때, 함수의 첫글자는 반드시 대문자여야 한다.
function App() {
  return elem;
}

export default App;

*/

/**
 * return 구문안에 직접 기술해도 된다.
 * 
 * function App() {
    return <div>Hello World 01</div>;
}

 */

// 한 줄 이상 기술해도 된다.
/*
const elem = <div>
  <h3>Hello World 03</h3>
  <div>
    This is Content 03
  </div>
</div>;

function App() {
  return elem;
}

export default App;
*/

// 이런식으로 써도 된다. 단, return 한 후 개행하고 싶으면 ()을 써서 한개의 값으로 묶어야 한다.
/*
function App() {
  return <div>
  <h3>Hello World 03</h3>
  <div>
    This is Content 03
  </div>
</div>;;
}

export default App;
*/

// JSX로 DOM을 구성할 때 단독 태그는 반드시 종료 태그가 존재해야 한다.
// JSX => Javascript XML
// ! 참조형 변수다. 이 변수값이 변경 되더라도 화면에 반영되지는 않는다. 하단 변수는 전역변수이다.
/*
const name = "NolBu";
const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;
const makeDOM = () => <span>makeDOM 01</span>;
const MakeDOM = () => <span>MakeDOM 02</span>;

function App() {
  // 내부에서만 쓰게 되면 여기에 기술한다. 그러면 지역변수이다.
  return (
    <div>
      바인딩 표현법(보간법)이라고 한다. <br />
      Name: {name} <br />
      onAdd: {onAdd(10, 20)} <br />
      makeDOM: {makeDOM()} <br />
      MakeDOM: {MakeDOM()} <br />
      
        If you meant to render a React component, start its name with an uppercase letter.
        DOM 형태로 쓰려고 하면 대문자로 써야 한다.(함수는 소문자.)

        <makeDOM></makeDOM>
      
      <MakeDOM></MakeDOM>
    </div>
  );
}


export default App;
*/

// node_modules에 있는 모듈은 상위패스 업싱 이름으로 바로 참조 가능.
import "bootstrap/dist/css/bootstrap.min.css";
import Second from "./components/A02Jquery";

function App() {
  // 이 변수도 참조형 변수.
  const name = "NolBu";
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;
  const MakeDOM = () => <span>MakeDOM 02</span>;

  return (
    // 리엑트는 기본적으로 자바스크립트 문법을 따른다. 따라서 클래스 이름이 className인것임.
    // <div className="App"></div>
    <div className="m-3">
      <h1>Chap02 JSX</h1>

      <div>
        Name: {name} <br />
        onAdd: {onAdd(10, 20)} <br />
        MakeDOM: {MakeDOM()} <br />
        HTML의 기본 속성은 체크한다. Image는 alt가 기본 <br />
        {/* 이미지는 분리해서 쓴다. import해서 쓰게 되면, 빌드한 경우 파일 옹량이 커지게 되고,
            이미지만 변경햇을 떄도 빌드를 새로 해야 하기 때문. */}
        <img src="./images/tree.jpg" alt="나무 이미지"></img> <br />
      </div>

      <Second></Second>
    </div>
  );
}

export default App;
