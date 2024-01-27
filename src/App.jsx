import React, { useState } from "react";
import smileyCat from "./Images/smiley cat meme.jpg";
import "./App.css";
import Button from "./Components/Button";
import Screen from "./Components/Screen";
import ClearButton from "./Components/ClearButton";

const App = () => {
  const [input, setInput] = useState("");

  const addInput = (value) => {
    setInput(input + value);
  };

  const handleResult = () => {
    if (input) {
      setInput(eval(input).toString());
    }
  }

  return (
    <main className="App">
      <section className="logo-container">
        <img src={smileyCat} className="logo" alt="smiley cat" />
      </section>
      <section className="calc-container">
        <Screen input={input} />
        <div className="queue">
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className="queue">
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className="queue">
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className="queue">
          <Button handleClick={handleResult}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className="queue">
          <ClearButton handleClick={() => setInput("")}>
            Clear
          </ClearButton>
        </div>
      </section>
    </main>
  );
};

export default App;
