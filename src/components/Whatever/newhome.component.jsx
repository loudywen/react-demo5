import React, { useState, useMemo, useCallback } from "react";
import Comp1 from "./comp_1.component";

const NewHome = () => {
  const [counter, setCounter] = useState(0);
  const [newArray, setNewArray] = useState(["one", "two"]);
  const [flag, setFlag] = useState(false);

  const array = useMemo(() => {
    return newArray;
  }, [newArray]);

  const fn = useCallback(() => {
    return console.log("fn is hit");
  }, []);

  console.log(
    "--------------------------- new home render -------------------"
  );

  const fn2 = () => {
    return console.log("fn2 is hit");
  };

  const title = "i am title";
  return (
    <div>
      <div>new Home: {counter}</div>
      <br />
      <button onClick={() => setFlag(p => !p)}>click me for comp 2</button>
      {flag && <Comp1 title={title} array={array} fn={fn} />}
      <button onClick={() => setCounter(p => p + 1)}>
        click me for counter
      </button>
      <br />
      <button onClick={() => setNewArray(p => [...p, "three"])}>
        click me for array
      </button>
      <br />

      <button
        onClick={() =>
          setNewArray(p => {
            console.log("array2 is clicked", p);
            return p;
          })
        }
      >
        click me for array2
      </button>
    </div>
  );
};

export default NewHome;
