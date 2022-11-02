// 정말 읽기 전용이라면 함수밖으로 빼는게 좋다.
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";


// currencies, rate는 렌더링에 영향도 없고, 다시 선언될 필요가 없기 떄문에 밖으로 뺴야 한다.

const currencies = ['USD', 'EUR', 'KRW'];
const rate = { USD: 1, EUR: 0.987, KRW: 0.00062 };

function A11Currency() {
  const [info, setInfo] = useState({
    qty: 3,
    cost: 5,
    inCurr: 'USD'
  });

  const qtyRef = useRef();

  const changeNumber = useCallback((event) => {
    setInfo(info => ({
      ...info,
      [event.target.name]: Number(event.target.value)
    }
    ));
  }, []);

  const changeString = useCallback((event) => {
    setInfo(info => ({
      ...info,
      [event.target.name]: event.target.value
    }));
  }, []);

  useEffect(() => {
    qtyRef.current.focus();
    qtyRef.current.style.background = 'orange';
  }, []);

  // 표시할 게 dom이라면, 그냥 dom을 만들어서 return 하면 뿌릴 때 복잡하게 꺼낼 수 없다.
  // <div>Total: {total().map(item => <span key={item}>{item.item} : {item.value}</span>)}</div>

  // 렌더링되면 다시 생성되는 함수. 이럴 때는 useMemo를 주면 된다.
  // 그러나, 여기서 주지 않은 이유는 어짜피 참조 변수가 qty, cost, inCurr 뿐이기 때문에.
  // 만약, 다른 변수를 참조한다면 useMemo를 주고 바라보는 변수를 qty, cost, inCurr로 매개변수를 주면 된다.
  const total = () => {
    const sum = currencies.map((item) => {
      const value = info.qty * info.cost * rate[info.inCurr] / rate[item];

      // return { item: item, value: value };
      return <span key={item}>{item} : {value}</span>

    });

    return sum;
  };

  return (
    <div>
      <h3>A09 Currency</h3>

      Qty: <input type="text" name="qty" className="form-control" value={info.qty} onChange={changeNumber} ref={qtyRef} />
      Cost: <input type="text" name="cost" className="form-control" value={info.cost} onChange={changeNumber} />
      Country: {info.inCurr}
      <select className="form-control" name="inCurr" value={info.inCurr} onChange={changeString}>
        {currencies.map((item, index) => <option key={item}>{item}</option>)}
      </select>
      <br />

      <div>Total: {info.qty * info.cost}</div>
      {/* <div>Total: {total().map(item => <span key={item}>{item.item} : {item.value}</span>)}</div> */}
      <div>
        Total: {total()}
      </div>
    </div>
  );
}
export default A11Currency;
