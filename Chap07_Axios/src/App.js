import A01Axios from "./components/A01Axios";
import ContactApp from "./components/ContactApp";

function App() {
  return (
    <div className="m-3">
      <h1>Axios</h1>

      {/* ContactApp은 router이다. 이렇게 App에서 일부만 router로 뺄 수 있다. */}
      <ContactApp></ContactApp>
      <hr />
      <A01Axios />
    </div>
  );
}

export default App;

// npm i react-router-dom axios
