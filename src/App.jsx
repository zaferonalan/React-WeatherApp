import { useState } from "react";
import "./App.css";
import Info from "./components/Info";
import Weather from "./components/Weather";

function App() {
const [info, setInfo] = useState([])
const [state, setState] = useState(false)

  return (
    <div className="App">
      <Weather setInfo={setInfo} setState={setState}/>
      <Info info={info} state={state}/>
    </div>
  );
}

export default App;
