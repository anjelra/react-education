import ColorBox from './components/ColorBox'
import ColorBoxContext from './contexts/ColorBoxContext';



import TodoTemplate from './components/TodoTemplate'
import { SelectColorProvider } from './contexts/SelectColorContext';
import SelectColor from './components/SelectColor';
import { TodoListProvider } from './contexts/TodoListContext';

const colorBoxData = { color: 'orange', contextName: 'ColorBox Context' };

function App() {
  return (
    <div className="m-3">
      <h1>Chap10 Context</h1>

      {/* Provider는 데이터 제공자. Consumer는 데이터 수신자.
          즉, Consumer는 ColorBox에서 사용. */}
      {/* value 객체로 전달. 어느 값을 ColorBox에 넘겨줄 것인지. */}
      {/* 위에서 선언한 변수를 값으로 넘기겟다는 것이므로, ColorBox component에서 꺼내쓸 수 있다.
        TodoTemplate에서는 꺼내쓸 수 없다. 묶이지 않았기 떄문에...
        
        또한, ColorBoxContext에서 선언한 값은 의미없다. 위에 선언된 값으로 넘어가기 때문에.*/}
      <ColorBoxContext.Provider value={colorBoxData}>
        <SelectColorProvider>
          <SelectColor></SelectColor>
        </SelectColorProvider>
      </ColorBoxContext.Provider>

      {/* SelectColorProvider 이 태그 자체가, Provider를 붙여놔서 자식 컴포넌트가 데이터를 사용할 수 있도록
        해 놨기 떄문에, SelectColor 컴포넌트는 SelectColorProvider 가 제공하는 것을 사용할 수 있다. */}
      {/* <SelectColorProvider>
        <SelectColor></SelectColor>
      </SelectColorProvider> */}
      <hr />
      <TodoListProvider>
        <TodoTemplate />
      </TodoListProvider>
    </div >
  );
}

export default App;
