import { useState } from "react";
import "./App.css";
import A01ClassProps from "./components/A01ClassProps";
import A02ClassState from "./components/A02ClassState";
import A03FuncProps from "./components/A03FuncProps";
import A04FuncState from "./components/A04FuncState";
import A05FuncEvent from "./components/A05FuncEvent";
import A06CreateDOM from "./components/A06CreateDOM";
import A07Hook from "./components/A07Hook";
import A08Hook from "./components/A08Hook";


function App() {
  // 참조만 가능한 변수
  const age = 20;
  let address = "서울";
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;
  const arr = [10, 20];
  const obj = { name: "흥부", age: 20 };

  // ! 함수형에는 hook을 사용할 수 있다.
  // ! 클래스형에는 생서자 안에 state를 정의해줘야 한다.
  // 값이 변경되면 변경됨 값으로 화면 갱신이 자동으로 이루어지는 변수
  const [num, setNnum] = useState(100);

  const changeAddress = () => address = 'Busan';    // 화면 반영 안됨
  const changeNum = () => setNnum(2000);            // 화면 반영됨. 현재 컴포넌트 리 렌더링 => 자식 리 렌더링

  return (
    <div className="m-3">
      <h1>Chap03 Component</h1>
      하위컴포넌트에 데이터 전달은 속성 형태로 이용한다. key가 변수명 = value
      <br />

      <hr />

      <A08Hook></A08Hook>

      <hr />

      <A07Hook></A07Hook>

      <hr />

      <A06CreateDOM></A06CreateDOM>

      <hr />

      <A05FuncEvent></A05FuncEvent>

      <hr />

      <A04FuncState></A04FuncState>

      <hr />

      <A03FuncProps
        name="흥부"
        age={age}
        addr={address}
        onAdd={onAdd}
        arr={arr}
        obj={obj}
        isChecked={false}
        num={num}
        changeNum={changeNum}>
        <div>App에서 전달한 View</div>
      </A03FuncProps>

      <hr />

      <A02ClassState></A02ClassState>

      <hr />

      <A01ClassProps
        name="흥부"
        age={age}
        addr={address}
        onAdd={onAdd}
        arr={arr}
        obj={obj}
        isChecked={false}
        num={num}
        changeNum={changeNum}
      >하위컴포넌트에 데이터 전달은 속성 형태로 이용한다. key가 변수명 = value</A01ClassProps>

      <A01ClassProps
        name="흥부"
        age={age}
        addr={address}
        onAdd={onAdd}
        arr={arr}
        obj={obj}
        isChecked={false}
        num={num}
        changeNum={changeNum}
      >hello world</A01ClassProps>


      <button type="button" onClick={changeAddress}>주소변경(직접 값 변경(address = '부산'))</button>
      <button type="button" onClick={changeNum}>숫자변경(state를 이용한 값 변경(setNum(2000)))</button>
    </div>
  );
}

export default App;
