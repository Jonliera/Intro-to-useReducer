import React, { useState, useEffect, useReducer } from "react";

const initialState = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    default:
      throw new Error(`There is no action type ${action.type}`);
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.title = state.counter;
  }, [state.counter]);

  return (
    <>
      {hidden ? <h1>Count Hidden</h1> : <h1>{state.counter}</h1>}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => setHidden(!hidden)}>Toggle</button>
    </>
  );
};

export default Counter;
