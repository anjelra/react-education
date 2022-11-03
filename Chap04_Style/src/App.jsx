import "./App.css";

// CSS 파일에 
import A01Style from "./components/A01Style";
import A02StyleModule from "./components/A02StyleModule";
import A03Classnames from "./components/A03Classnames";
import A04StyledComponent from "./components/A04StyledComponent";

function App() {
  return <div className="m-3">
    <h1>Chap04 Style</h1>

    <hr />
    <A04StyledComponent />

    <hr />
    <A03Classnames />

    <hr />
    <A02StyleModule />

    <hr />
    <A01Style />

  </div>;
}

export default App;
