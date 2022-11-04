import React from "react";
import { useContext } from "react";
import ColorBoxContext from "../contexts/ColorBoxContext";
import SelectColorContext from "../contexts/SelectColorContext";
// import { SelectColorConsumer } from "../contexts/SelectColorContext";


function ColorBox() {
  // useContext란 훅으로, 가져올 이름만 주면 뽑아쓸 수 있다.
  const { color, contextName } = useContext(ColorBoxContext);
  const { state } = useContext(SelectColorContext);
  return (
    <div>
      <h5>{contextName} / {color} / {state.color}</h5>
      <div
        style={{ width: "50px", height: "50px", display: "block", background: state.color }}
      ></div>
    </div>

    // 이런식으로 데이터 안에 데이터를 가져와서, 작업할 수 있다. 그러나 훅이 더 편하다.
    // Consumer 데이터 수신자. (Consumer 태그 안에서 props를 받아서 그냥 사용하면 된다.)
    // <ColorBoxContext.Consumer>
    //   {(props) => (
    //     <SelectColorConsumer>
    //       {data => (
    //         <div>
    //           <h5>{props.contextName} / {props.color} / {data.state.color}</h5>
    //           <div
    //             style={{ width: "50px", height: "50px", display: "block", background: data.state.color }}
    //           ></div>
    //         </div>
    //       )}
    //     </SelectColorConsumer>
    //   )}
    // </ColorBoxContext.Consumer>
  );
}
export default ColorBox;
