import { useState } from "react";
import { createContext } from "react";

const SelectColorContext = createContext({
  state: { color: '', contextName: '', num: 0 },
  action: {
    setColor: () => { },
    setContextName: () => { },
    setNum: () => { }
  }
});

/**
 * 이런 형태로 사용하겠다는 뜻.(공급하려면 무조건 Provider를 붙여야 하는데, 
 *    이미 SelectColorProvider 함수안에 만들어져 있기 때문에 SelectColorProvider 요고로 묶은 컴포넌트들은 하단과 같이 사용할 수 있음.)
 * <SelectColorProvider>
 *  <A01Comp></A01Comp>
 * <A02Comp></A02Comp>
 * </SelectColorProvider>
 */
function SelectColorProvider(props) {
  const [color, setColor] = useState('lightgray');
  const [contextName, setContextName] = useState('SelectColor Context');
  const [num, setNum] = useState(100);
  // let num = 100;

  // const setNum = () => num = 1000;

  const selectColorData = {
    // es6부터는 객체의 key와 value가 동일하면 생략할 수 있다.
    // state: {color: color, contextName: contextName, num: num},
    state: { color, contextName, num },
    action: { setColor, setContextName, setNum }
  };

  return (
    <>
      <SelectColorContext.Provider value={selectColorData}>
        {props.children}
      </SelectColorContext.Provider>
    </>
  );
}

// SelectColorConsumer를 넘기면, 쓸 때 .consumer를 쓸 필요가 없다.
// const SelectColorConsumer = SelectColorContext.Consumer;

// props를 꺼낼 때는 consumer를 붙여서 꺼낼 수 있지만 훅을 쓸때는 이렇게 꺼내올 수 없다.
export { SelectColorProvider,  /*SelectColorConsumer*/ };

// 훅인 경우에는 하단처럼 꺼내면 된다
export default SelectColorContext;