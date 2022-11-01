import React, { useState } from 'react'

function A04FuncState() {
  // 참조 가능한 변수.(렌더링 영향 X)
  // 읽기전용
  let className = 'A04FuncState';
  const changeClassName = () => className = '리 렌더링 되도 안바뀐다..........';

  // 화면 변경용
  // const [변수명, 변수의 값을 변경할 Setter Method] = useState(초기화 값);
  // 변수는 읽기 전용. 값 변경은 반드시 Setter Method를 이용해서 변경한다.
  const [name, setName] = useState('쏭');
  const [age, setAge] = useState(20);
  const [check, setCheck] = useState(false);
  const [arr, setArr] = useState([10, 20]);
  const [obj, setObj] = useState({ name: 'HungBu', age: 20 });

  // method
  // 자바스크립트 클로즈업? 이거 때문에 화면이 렌더링이 되어도 변하지 않는 것이다. 
  // 값을 킵 해놓기 때문에 setName을 하게 되도 변경된 값을 가지고 있어 변하지 않는다.
  const changeName = () => setName('젤');
  const changeAge = () => setAge(50);
  const changeCheck = () => setCheck(!check);


  const addArray = () => {
    const random = Math.ceil(Math.random() * 100);
    // const newArr = arr.concat(random);

    // setArr(newArr);

    setArr(arr.concat(random));
  };

  const updateArray = (index, value) => {
    const newArr = arr.map((item, i) => {
      if (index === i) return value;
      else return item;
    });

    setArr(newArr);
  };

  const deleteArray = index => {
    const newArr = arr.filter((item, i) => {
      return index === i
    });

    setArr(newArr);
  };

  const addObj = (key, value) => {
    const newObj = { ...obj, [key]: value };

    setObj(newObj);
  };

  const updateObj = (key, value) => {
    const newObj = { ...obj, [key]: value };

    setObj(newObj);
  };

  const deleteObj = key => {
    delete obj[key];

    const newObj = { ...obj };

    setObj(newObj);
  };

  return (
    <>
      <h3>A04FuncState</h3>

      <div>
        className: {className} <br />

        <button type='button' onClick={changeClassName}>이건 안바뀐다??</button>
      </div>

      <div>
        Name: {name} <br />
        Age: {age} <br />
        Check: {check ? '체크' : '언체크'} <br />
        Array: {arr.map((item, index) => <span key={index}>{item}</span>)} <br />
        Object: {obj.name} / {obj.age} / {obj.address}

        <br />

        <button type='button' onClick={changeName}>'젤'로 이름 변경</button>
        <button type='button' onClick={changeAge}>50로 나이 변경</button>
        <button type='button' onClick={changeCheck}>true, false 변경</button>

        <br />

        {/* Array */}
        <button type='button' onClick={addArray}>배열 추가</button>
        <button type='button' onClick={() => updateArray(1, '15')}>배열값 변경</button>
        <button type='button' onClick={() => deleteArray(1)}>배열값 삭제</button>

        <br />

        {/* Object */}
        <button type='button' onClick={() => addObj("address", "부산")}>Object 추가</button>
        <button type='button' onClick={() => updateObj('name', '젤')}>Object 변경</button>
        <button type='button' onClick={() => deleteObj('name')}>Object 삭제</button>
      </div>
    </>
  )
}

export default A04FuncState