// import { calculateSum } from "./sum";

import { Suspense, lazy, useState } from "react";
const LazyImport = lazy(() => import("./User"));
import Test from "./Test";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [count, setCount] = useState(0);
  const handleCalculate = () => {
    // console.log(calculateSum(2, 4));
    import("./sum").then((calc) => {
      console.log(calc.calculateSum(3, 4));
    });
  };

  return (
    <div>
      {isLogged && (
        <Suspense fallback={<div>loading ...</div>}>
          <LazyImport />
        </Suspense>
      )}
      <Suspense></Suspense>
      <button onClick={() => setIsLogged((prevState) => !prevState)}>
        log in
      </button>
      <button onClick={handleCalculate}>calculate</button>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        {count}
      </button>
      <Test name="john" age={{ age: 12 }} />
    </div>
  );
}

export default App;
