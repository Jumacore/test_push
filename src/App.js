// import logo from './logo.svg';
// import './App.css';
import React from "react";
// import NestedComponent from "./containers/NestedComponent";
// import NestedComponentWithContext from "./containers/NestedComponentWithContext";
// import NestedComponentWithContextPart2 from "./containers/NestedComponentWithContextPart2";
import ToDo from "./containers/ToDo";

function App() {
  return (
    <div style={{ padding: "1em" }}>
      <ToDo />
      {/* TODO : Uncomment ini untuk melihat hasil */}
      {/* <NestedComponent />
      <NestedComponentWithContext /> */}
      {/* <NestedComponentWithContextPart2 /> */}
    </div>
  );
}

export default App;
