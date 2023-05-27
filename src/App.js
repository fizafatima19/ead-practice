import logo from './logo.svg';
import './App.css';
import {CP} from "./components/CP.js";
import FP from "./components/FP.jsx";


function App() {
  const obj1={a:1,b:{c:{d:3}}};
  return (
    <div className="App">
      <CP obj={obj1} fiza="fatima" />

      <div> 
        FUNCTIONAL
      </div>
      <FP name="jameel" age={12} />
    </div>
  );
}

export default App;
