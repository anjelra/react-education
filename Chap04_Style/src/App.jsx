import "./App.css";

// CSS 파일에 
import A01Style from "./components/A01Style";
import A02StyleModule from "./components/A02StyleModule";

function App() {
  return <div className="m-3">
    <h1>Chap04 Style</h1>

    <hr />
    <A02StyleModule />

    <hr />
    <A01Style />

  </div>;
}

export default App;
