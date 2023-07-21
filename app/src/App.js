import "./App.css";
import { useState } from "react";
import divide from "./logic";

function App() {
  const [numString, setNumString] = useState("");

  if ( document.querySelector('.display') != null ) {
     let number = document.querySelector(".display").innerHTML.toString();
  }

  const handleClick = (event) => {
    const clickedValue = event.target.innerHTML;
    setNumString((prevNumString) => prevNumString + clickedValue);
  }

  const handleDelete = () => {
    setNumString(numString.substring(0 , numString.length - 1));
  }

  const calculate = () => {

    const result = divide(numString);
    setNumString(result);
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display"> {numString} </div>

        <div className="row1" id="row">
          <div className="number" id="1" onClick={handleClick}>
            1
          </div>
          <div className="number" id="2" onClick={handleClick}>
            2
          </div>
          <div className="number" id="3" onClick={handleClick}>
            3
          </div>
          <button className="plus" onClick={handleClick}>
            +
          </button>
        </div>
        <div className="row2" id="row">
          <div className="number" id="4" onClick={handleClick}>
            4
          </div>
          <div className="number" id="5" onClick={handleClick}>
            5
          </div>
          <div className="number" id="6" onClick={handleClick}>
            6
          </div>
          <button className="minus" onClick={handleClick}>
            -
          </button>
        </div>
        <div className="row3" id="row">
          <div className="number" id="7" onClick={handleClick}>
            7
          </div>
          <div className="number" id="8" onClick={handleClick}>
            8
          </div>
          <div className="number" id="9" onClick={handleClick}>
            9
          </div>
          <button className="asterik" onClick={handleClick}>
            *
          </button>
        </div>
        <div className="row4" id="row">
          <div className="number" id="0" onClick={handleClick}>
            0
          </div>
          <button className="divide" onClick={handleClick}>
            /
          </button>
          <button className="equalto" onClick={calculate}>
            =
          </button>
          <button className="delete" onClick={handleDelete}>
            DEL
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
