import React from "react";
import useMovementData from "../hooks/useMovementData";

export default function MovementList() {
  const { state } = useMovementData();

  return (
    <div>
      {console.log("STATE: ", state.movements)}
      <div>Movements:</div>
      <br />
      {state.movements.map((movement) => (
        <div key={movement.description}>
          <div>
            Start Location: {movement.start[0]}, {movement.start[1]}
          </div>
          <div>
            End Location: {movement.end[0]}, {movement.end[1]}
          </div>
          <div>Description: {movement.description}</div>
          <hr />
        </div>
      ))}
    </div>
  );
}
