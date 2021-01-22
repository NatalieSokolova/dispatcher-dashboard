import React from "react";
import MovementList from "./components/MovementList";
// import NewMovement from "./components/Form";
import useMovementData from "./hooks/useMovementData";
import "./App.css";

function App() {
  const { state } = useMovementData();

  return (
    <div>
      <MovementList state={state} />
      {/* <NewMovement state={state} /> */}
    </div>
  );
}

export default App;
