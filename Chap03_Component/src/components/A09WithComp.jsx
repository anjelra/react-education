import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react';

// 매개변수의 첫글자는 반드시 대문자로 적어야 한다.
function A09WithComp(Comp) {
  // Comp를 넘기고 하단의 props는 A09HigherOrder 에서 넘겨준 props를 받는 것이다.
  // useState
  const inner = function Inner(props) {
    const [age, setAge] = useState(100);
    const changeAge = useCallback(() => {
      setAge(200);
    }, []);

    return (
      <div>
        <h3>A09 With Comp(함수다)</h3>
        Name: {props.name} <br />
        Age: {age} <br />
        <button onClick={changeAge}>AGE</button>

        <hr />

        {/* 여기서의 Comp는 A09HigherOrder 이다. (A09HigherOrder 파일 참조.) */}
        {/* 일일이 기술하기 귀찮으니, 받은 props를 다 넘겨라.  */}
        <Comp {...props} age={age} changeAge={changeAge}></Comp>
      </div >

    );
  }

  return inner;

  // 이렇게 하면 useState에서 에러가 발생한다. 이유는, 참조할 수 없기 때문에. 따라서 하단의 함수를
  // 변수에 넣고 함수명을 위에처럼 기술해줘야 한다.
  // return function (props) {
  //   const [age, setAge] = useState(0);


  //   return (
  //     <div>
  //       <h3>A09 With Comp(함수다)</h3>
  //       Name: {props.name} <br />
  //       Age: {age} <br />
  //       <button>AGE</button>

  //       <hr />

  //       {/* 여기서의 Comp는 A09HigherOrder 이다. (A09HigherOrder 파일 참조.) */}
  //       {/* 일일이 기술하기 귀찮으니, 받은 props를 다 넘겨라.  */}
  //       <Comp {...props}></Comp>
  //     </div >

  //   );
  // }
}

export default A09WithComp;