import React, { useState } from "react";
import axios from "axios";

export default function MovementList({ state }) {
  const [index, setIndex] = useState(null);

  const handleDelete = (event) => {
    // event.preventDefault();
    axios
      .delete("http://localhost:3001/movements", index)
      .then((result) =>
        console.log("MOVEMENT DELETED SUCCESSFULLY! TOAST later!")
      )
      .catch((err) => console.log(err));
  };

  console.log("I: ", index);

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
              onClick={() => {
                setIndex(index);
                handleDelete();
              }}
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
