import React from "react";

const Test2 = props => {
  console.log("number", props.match.params.id);
  return <div>Test 2 route</div>;
};

export default Test2;
