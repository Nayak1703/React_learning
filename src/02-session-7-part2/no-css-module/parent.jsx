import React from "react";
import Child1 from "./child1";
import Child2 from "./child2";
const Parent = () => {
  return (
    <div className="parent">
      <Child1 />
      <Child2 />
    </div>
  );
};

export default Parent;
