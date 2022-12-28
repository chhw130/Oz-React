import React, { useState } from "react";

function Test() {
  const [count, setCount] = useState(0);

  function countHandler() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>total count! : {count}</p>
      <button onClick={countHandler}>Count Up</button>
    </div>
  );
}

export default Test;
