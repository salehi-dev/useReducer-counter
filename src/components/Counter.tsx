import { useReducer } from "react";

interface State {
  count: number;
}

enum ActionTypes {
  increment = "INCREMENT",
  decrement = "DECREMENT",
  reset = "RESET",
}

const reducer = (state: State, action: { type: ActionTypes }) => {
  switch (action.type) {
    case ActionTypes.increment:
      return { ...state, count: state.count + 1 };
    case ActionTypes.decrement: {
      return { ...state, count: state.count - 1 };
    }
    case ActionTypes.reset: {
      return { count: (state.count = 0) };
    }
    default: {
      return state;
    }
  }
};

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const incrementHandler = () => {
    dispatch({ type: ActionTypes.increment });
  };
  const decrementHandler = () => {
    dispatch({ type: ActionTypes.decrement });
  };
  const resetHandler = () => {
    dispatch({ type: ActionTypes.reset });
  };
  return (
    <div>
      <h4>{state.count}</h4>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}
