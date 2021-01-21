import React from "react";
import useMovementData from "../hooks/useMovementData";

export default function MovementList() {
  const { state } = useMovementData();

  return (
    <div>
      {console.log("STATE: ", state.movements)}
      <div>Movements:</div>
      <br />
      {state.movements.map((movement, index) => (
        <div key={index}>
          <div>Start Location: {movement.start}</div>
          <div>End Location: {movement.end}</div>
          <div>Description: {movement.description}</div>
          <hr />
        </div>
      ))}
    </div>
  );
}
