import { useState } from "react";
import "./index.scss";

function App() {
  const [count, setCount] = useState(0);
  // let count = 0;

  function onClickPlus() {
    setCount(count + 1);
    console.log("count>>", count);
  }

  function onClickMinus() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount((count = 0));
    }

    console.log("count>>", count);
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinus} className="minus">
          - Минус
        </button>
        <button onClick={onClickPlus} className="plus">
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;
