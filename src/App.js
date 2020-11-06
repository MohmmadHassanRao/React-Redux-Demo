import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/Action";

function App() {
  let dispatch = useDispatch();
  const counter = useSelector((state) => state.count);
  console.log(counter);
  return (
    <div>
      <h1>COUNTER REDUX </h1>
      <h2>{counter}</h2>
      <button
        onClick={() =>
          // dispatch({ type: "INCREMENT_DATA", increaseCounter: counter + 1 }) //idhr jo increase counter hai wo usko payload boltay hain
          dispatch(increment())
        }
      >
        Increment
      </button>

      <button
        onClick={() =>
          // dispatch({ type: "DECREMENT_DATA", decreaseCounter: counter - 1 }) //idhr jo decrease counter hai usko ham pyaload bp;tay hain jo initial state ko update krega
          dispatch(decrement())
        }
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
