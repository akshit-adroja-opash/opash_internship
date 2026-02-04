import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Fallback from "./components/Fallback";
import BuggyComponent from "./components/BuggyComponent";

const App = (): React.JSX.Element => {
  return (
    <ErrorBoundary fallback={<Fallback />}>
      <BuggyComponent />
    </ErrorBoundary>
  );
};

export default App;
