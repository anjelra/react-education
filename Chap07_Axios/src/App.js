import A01Axios from "./components/A01Axios";
import ContactApp from './components/ContactApp'

function App() {
  return (
    <div className="m-3">
      <h1>Axios</h1>

      <ContactApp></ContactApp>
      <hr />
      <A01Axios />
    </div>
  );
}

export default App;

// npm i react-router-dom axios
