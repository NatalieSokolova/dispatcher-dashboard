import React, { useState } from "react";
import Form from "./Form";
import axios from "axios";
import { toast } from "react-toastify";
import { notifySuccessDelete, notifyError } from "../helpers";

export default function MovementList({ movements, setMovements }) {
  toast.configure();

  const [showForm, setShowForm] = useState(false);

  const [movement, setMovement] = useState({
    startLat: null,
    startLong: null,
    endLat: null,
    endLong: null,
    description: "",
  });

  const [movementIndex, setMovementIndex] = useState(null);

  const handleDelete = (event, index) => {
    event.preventDefault();
    // console.log("I: ", index);

    // sends a delete request only if a user clicks "OK"
    if (
      window.confirm("Are you sure you would like to delete this movement?")
    ) {
      axios
        .delete("http://localhost:3001/movements", { data: { index } })
        .then((result) => {
          // console.log("index: ", index);
          let updatedMovements = movements.filter((mov, i) => i !== index);

          // updates state, causes the component to rerender
          setMovements(updatedMovements);
          setShowForm(false);
          setMovement({});
          setMovementIndex(null);
          notifySuccessDelete("Movement deleted!");
        })
        .catch((err) => {
          notifyError("OOPS! Something went wrong. Please, try again");
          console.log(err);
        });
    }
  };

  // console.log("UPD: ", movement);

  const showUpdateForm = (event, movement, index) => {
    event.preventDefault();
    setShowForm(true);
    setMovement(movement);
    setMovementIndex(index);
  };

  return (
    <div>
      <div>Movements:</div>
      <br />
      {movements.map((movement, index) => (
        <div key={index}>
          <div>
            Start Location: {movement.startLat}, {movement.startLong}
          </div>
          <div>
            End Location: {movement.endLat}, {movement.endLong}
          </div>
          <div>Description: {movement.description}</div>
          <div>
            <button
              onClick={(event) => {
                showUpdateForm(event, movement, index);
                setMovement(movement);
                // console.log("M :", movement);
              }}
              type="submit"
              // className="btn btn-default"
            >
              Update
            </button>
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
      <button
        onClick={() => {
          setShowForm(true);
          setMovement({});
          // console.log("M :", movement);
          setMovementIndex(null);
        }}
        // type="submit"
        // className="btn btn-default"
      >
        Add Movement
      </button>
      {showForm ? (
        <div>
          <Form
            movements={movements}
            setMovements={setMovements}
            setShowForm={setShowForm}
            movement={movement}
            movementIndex={movementIndex}
            setMovement={setMovement}
          />
        </div>
      ) : null}
    </div>
  );
}
