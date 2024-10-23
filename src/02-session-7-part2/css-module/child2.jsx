import React from "react";
import child2Styles from "./child2.module.css";

const Child2 = () => {
  return (
    <div id={child2Styles.box}>
      <h1 className={child2Styles.child2}>This is child2</h1>
    </div>
  );
};

export default Child2;
