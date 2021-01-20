import React from "react";
import useMovementData from "../hooks/useMovementData";

export default function Movement() {
  const { state } = useMovementData();

  return (
    <div>
      {console.log("STATE: ", state.movements)}
      <div>Movements:</div>
      <br />
    </div>
  );
}
