import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleChangeCounter = (value) => {
    setCounter(counter + value);
  };

  return (
    <div>
      <h1>COUNTER</h1>
      <button onClick={() => handleChangeCounter(-1)}>-</button>
      {counter}
      <button onClick={() => handleChangeCounter(1)}>+</button>
    </div>
  );
};

export default Counter;
