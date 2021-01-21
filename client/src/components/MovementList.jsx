import React from "react";
import axios from "axios";

export default function MovementList({ state }) {
  const handleDelete = (event, index) => {
    event.preventDefault();
    console.log("I: ", index);

    axios
      .delete("http://localhost:3001/movements", { data: { index } })
      .then((result) =>
        console.log("MOVEMENT DELETED SUCCESSFULLY! TOAST later!")
      )
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>Movements:</div>
      <br />
      {state.movements.map((movement, index) => (
        <div key={index}>
          <div>Start Location: {movement.start}</div>
          <div>End Location: {movement.end}</div>
          <div>Description: {movement.description}</div>
          <div>
            <button
              onClick={(event) => handleDelete(event, index)}
              type="submit"
              // className="btn btn-default"
            >
              Delete
            </button>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}
