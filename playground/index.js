import React from "react";
import { render } from "react-dom";
import { SampleInput } from "../lib";

function App() {
  return (
    <div>
      <SampleInput />
    </div>
  );
}

render(<App />, document.getElementById("root"));
