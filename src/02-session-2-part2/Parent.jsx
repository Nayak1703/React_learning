import React, { useState } from "react";
import Child1 from "./Child1.jsx";
import Child2 from "./Child2.jsx";

const Parent = () => {
  const [val, setValue] = useState("");
  console.log(val);
  return (
    <div className="parent">
      <Child1 props={setValue} />
      <Child2 data={val} />
    </div>
  );
};

export default Parent;
