import  React from "react";
const BuggyComponent = (): React.JSX.Element => {
  throw new Error("Intentional crash 🚨");
  return <h1>This will never render</h1>;
};

export default BuggyComponent;
