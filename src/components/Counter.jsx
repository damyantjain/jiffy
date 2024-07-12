import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="m-10">
      <p className="font-medium text-lg">Counter</p>
      <p className="text-2xl">{count}</p>
      <button
        className="border-2 rounded-lg px-3"
        onClick={() => setCount(count + 1)}
      >
        Increment count
      </button>
    </div>
  );
};

export default Counter;
