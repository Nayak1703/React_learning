// importing useEffect
import React, { useState, useEffect } from "react";

const Counter_useEffect = (props, ref) => {
  const [count, setCount] = useState(0);
  const { diff } = props;

  const incrementBtn = () => {
    setCount((prevState) => prevState + diff);
  };
  const decrementBtn = () => {
    setCount((prevState) => prevState - diff);
  };

  // calling useEffect hook which is similar to life-cycle-methods,
  // useEffect accept the function as a argument, useEffect(()=>{}), so useEffect() takes a callback function.

  // when useEffect() is called?
  // 1. react will define the function component Counter_useEffect
  // 2. react will define state & props
  // 3. react will define incrementBtn() & decrementBtn()
  // 4. react will return the jsx code (do all the reconciliation and do the printing process)
  // 5. after first time jsx code executed then useEffect() will get trigger (execute)

  // useEffect() have 4 variation:

  // 1st variation: (execute after 1st time DOM loaded && on every time value of props/state changes)
  useEffect(() => {
    console.log("On-load || value change of props/state is changing");
  });

  // 2nd variation: (execute only 1 time after 1st time DOM loaded) -> this is similar to componentDidMount()
  // useEffect take 2 arguments: 1-> callBack function, 2-> [] dependence-array.
  // [] (dependence-array): will have single or multiple elements (mostly we keep those elements that will change, if the value of elements change it execute useEffect())
  // so, when react checks that, dependence-array is empty (no element is there to changes).
  // so it will not execute the useEffect() but it will execute useEffect only 1 time (because of the ruleOfHooks i.e. useEffect will execute atleast one time after 1st time jsx is executed.)
  useEffect(() => {
    console.log(
      "MOUNTING: this will execute only 1 time after 1st time DOM loaded"
    );
  }, []);

  // 3rd variation: (execute when dependence-array's element is changing its value) -> this is simlar to componentDidUpdate()
  // we have more control when to execute the useEffect() better than 1st variation
  // flow: useEffect() -> dependence-array -> is value of element changes -> yes -> execute this useEffect()
  useEffect(() => {
    console.log(
      "UPDATING: this will execute when we are changing the value of element in dependence-array i.e count"
    );
  }, [count]);

  // 4th variation: (execute when we returning function() from the callBack-function()) -> this is similar to componentWillUnmount()
  useEffect(() => {
    // returning function
    return () => {
      console.log("UNMOUNTING: the element");
    };
    // if we put elements in dependency-array, then it will execute this useEffect() every time value of element got change (execute when component is unmount)
    // if we put dependency-array empty, then useEffect will not execute when we are changing the value of elements.
  }, []);

  return (
    <div>
      <button onClick={decrementBtn}>-{diff}</button>
      <span>{count}</span>
      <button onClick={incrementBtn}>+{diff}</button>
    </div>
  );
};
export default Counter_useEffect;
