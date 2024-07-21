"use client";

import { useState } from "react";

function Counter({ users }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>There are {users.length} users</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
    </>
  );
}

export default Counter;
