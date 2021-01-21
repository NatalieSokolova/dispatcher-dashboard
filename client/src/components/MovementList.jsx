import React from "react";

export default function MovementList({ state }) {
  return (
    <div>
      {/* {console.log("STATE ML: ", state.movements)} */}
      <div>Movements:</div>
      <br />
      {state.movements.map((movement, index) => (
        <div key={index}>
          <div>Start Location: {movement.start}</div>
          <div>End Location: {movement.end}</div>
          <div>Description: {movement.description}</div>
          <div>
            <button
              // Click={handleUpdate}
              type="submit"
              // className="btn btn-default"
            >
              Update
            </button>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}
