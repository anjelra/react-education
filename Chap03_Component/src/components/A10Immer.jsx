// 객체는 하단에 풀어주고 풀어주고 이런 식으로 접근하기 때문에, immer 라는 모듈을 사용하면 쉽게 할 수 있다.
// immer 는 우리가 쓰는 push, pop 등등 주소값 안변하는 것들도 쓸 수 있음!

// npm install immer
import React, { useState } from "react";
import { useCallback } from "react";
import producer, { produce } from "immer";

function A10Immer() {
  const [person, setPerson] = useState({
    name: "",
    info: {
      address: "",
      tel: [10, 20, 30],
      etc: {
        one: "",
        two: "",
      },
    },
  });


  const changeName = useCallback((event) => {
    setPerson(x => ({ ...x, name: 'thd' }));
  }, []);

  const changeAddress = useCallback(() => {
    // 객체안에 객체가 있는 경우는, 객체 풀고, 그 안에 객체 풀고 변경될 꺼만 변경.
    setPerson(person => ({
      ...person,
      info: {
        ...person.info,
        address: 'Busan'
      }
    }));
  }, []);

  const changeOne = useCallback(() => {
    setPerson(person => ({
      ...person,
      info: {
        ...person.info,
        etc: {
          ...person.info.etc,
          one: '메롱'
        }
      }
    }));
  }, []);

  const changeTel = useCallback(() => {
    setPerson(person => ({
      ...person,
      info: {
        ...person.info,
        tel: person.info.tel.concat('1000')
      }
    }));
  }, []);

  // ! immer 버전
  const changeNameImmer = useCallback(() => {
    // procude(수정할 원본 변수, 수정할 변수의 참조변수 => {})
    // produce의 리턴값은 변경된 새로운 객체로 리턴해 준다.
    setPerson(person => (
      producer(person, draft => {
        // 이 내부는 배열의 경우 push, pop, shift... 등의 메서드를 이용한다.
        // 객체의 경우AAA.bbb.cc 형태로 참조한다.
        draft.name = '흥부';
      })
    ));
  }, []);

  const changeAddressImmer = useCallback(() => {
    setPerson(person => (
      produce(person, draft => {
        draft.info.address = '경기';
      })
    ));
  }, []);

  return (
    <div>
      <h3>A08. Immer</h3>

      Name: {person.name}
      <br />

      Address: {person.info.address}
      <br />

      One: {person.info.etc.one}
      <br />

      Ary:{" "}
      {person.info.tel.map((item, i) => (
        <span key={i}>{item} </span>
      ))}
      <br />

      <button onClick={changeName}>Name</button>
      <button onClick={changeAddress}>Address</button>
      <button onClick={changeOne}>One</button>
      <button onClick={changeTel}>ADD</button>
      <br />

      <button onClick={changeNameImmer}>Name</button>
      <button onClick={changeAddressImmer}>Address</button>
      <button>One</button>

      <button>ADD</button>
      <button>UPDATE</button>
      <button>DELETE</button>
    </div>
  );
}
export default A10Immer;
