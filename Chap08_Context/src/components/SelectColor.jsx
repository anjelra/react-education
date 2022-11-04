import React from 'react'
import { useContext } from 'react';
import SelectColorContext, { SelectColorConsumer } from '../contexts/SelectColorContext';

function SelectColor() {
  const colors = ['red', 'orange', 'green', 'blue', 'yellow'];
  const style = { width: '50px', height: '50px', background: 'gray', cursor: 'pointer' };

  const { state, action } = useContext(SelectColorContext);

  return (
    <div>
      <h5>{state.contextName} / {state.num} / {state.color}</h5>
      <div style={{ display: 'flex' }}>
        {colors.map(color => <div key={color} style={{ ...style, background: color }} onClick={() => action.setColor(color)}>{color}</div>)}
      </div>

      {/* props.action.setNum은 참조형 변수이기 때문에, 해당 버튼을 클릭해도 화면이 재 렌더링 되지 않는다. */}
      <button onClick={() => action.setNum(1000)}>NUM</button>
      <button type='button' onClick={() => action.setContextName('Change Name')}>Name</button>
    </div>

    // SelectColorConsumer 이라고만 쓰면, 이미 해당 태그에서 Consumer를 붙여놔서
    // 그 안의 태그들은 SelectColor에서 공급해주는 데이터를 사용할 수 있다.
    // <SelectColorConsumer>
    //   {props => (
    //     <div>
    //       <h5>{props.state.contextName} / {props.state.num} / {props.state.color}</h5>
    //       <div style={{ display: 'flex' }}>
    //         {colors.map(color => <div key={color} style={{ ...style, background: color }} onClick={() => props.action.setColor(color)}>{color}</div>)}
    //       </div>

    //       {/* props.action.setNum은 참조형 변수이기 때문에, 해당 버튼을 클릭해도 화면이 재 렌더링 되지 않는다. */}
    //       <button type='button' onClick={() => props.action.setNum}>NUM</button>
    //       <button type='button' onClick={() => props.action.setContextName('Change Name')}>Name</button>
    //     </div>
    //   )}
    // </SelectColorConsumer>


  )
}
export default SelectColor
