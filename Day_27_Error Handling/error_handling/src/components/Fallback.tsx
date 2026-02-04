import React from "react";

const Fallback = (): React.JSX.Element => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>⚠️ Oops!</h2>
      <p>Something went wrong. Please try again later.</p>
    </div>
  );
};

export default Fallback;
