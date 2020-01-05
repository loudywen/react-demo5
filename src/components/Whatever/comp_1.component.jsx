import React, { useState, useEffect } from "react";

const Comp1 = ({ title, array, fn }) => {
  console.log("--------------------------- Comp1 render -------------------");

  useEffect(() => {
    console.log(array)
    fn()
  }, [fn,array]);
  return (
    <div>
      <h2>{title}</h2>
      <p>Child</p>
      <button onClick={fn}>click me comp1</button>
    </div>
  );
};

export default React.memo(Comp1);
