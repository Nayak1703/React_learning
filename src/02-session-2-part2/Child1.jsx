import React, { useEffect, useState } from "react";

const Child2 = ({ props }) => {
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    props(textInput);
  }, [textInput]);

  return (
    <div className="Child2">
      <input
        type="text"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        placeholder="enter name"
      />
    </div>
  );
};

export default Child2;
