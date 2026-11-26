import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  /*
    === useEffect Dependency Array behaviours ===
    1. No Dependency Array - effect will run on every re-render, that means no matter
                             what useState variable is being updated, it will run.
    2. Empty Dependecy Array - effect will run ONLY on the first load of the component
    3. Dependency Array with useState variable - effect will run when useState vriable
                                                value changes, or respective setter 
                                                function of the useState variable is called
  */

  useEffect(() => {
    // setCount(count + 1) <-- DO NOT DO THIS: will create infnite loop
    document.title = `You clicked ${count} times. second clicked ${secondCount}`;
  }, [count, secondCount]);

  return (
    <div className="d-flex justify-content-center">
      <p>You clicked {count} times</p>
      <button
        className="btn btn-primary ml-3"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>

      <p>You clicked {secondCount} times</p>
      <button
        className="btn btn-primary ml-3"
        onClick={() => setSecondCount(secondCount + 1)}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
