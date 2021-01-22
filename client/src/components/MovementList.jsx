import React, { useState } from "react";
import Form from "./Form";
import axios from "axios";

export default function MovementList({ state }) {
  const [showForm, setShowForm] = useState(false);

  const [movement, setMovement] = useState({
    start: null,
    end: null,
    description: "",
  });

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

  console.log("UPD: ", movement);

  const handleUpdate = (event, movement) => {
    event.preventDefault();
    setShowForm(true);
    setMovement(movement);
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
            <button
              onClick={(event) => handleUpdate(event, movement)}
              type="submit"
              // className="btn btn-default"
            >
              Update
            </button>
          </div>
          <hr />
        </div>
      ))}
      <button
        onClick={() => {
          setShowForm(true);
        }}
        // type="submit"
        // className="btn btn-default"
      >
        Add Movement
      </button>
      {showForm ? (
        <div>
          <Form
            state={state}
            setShowForm={setShowForm}
            movement={movement}
            setMovement={setMovement}
          />
        </div>
      ) : null}
    </div>
  );
}
