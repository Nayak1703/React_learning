import React from "react";
// child1Style is object of styles
import child1Style from "./child1.module.css";

const Child1 = () => {
  return (
    // it will apply box style which is present inside child1Style this is more specific
    // describe style to apply. and there will be no confusion.

    // in non-css-module, it will only consider, latest style (style file which is last in order).

    <div id={child1Style.box}>
      <h1 className={child1Style.child1}>This is child1</h1>
    </div>
  );
};

export default Child1;
