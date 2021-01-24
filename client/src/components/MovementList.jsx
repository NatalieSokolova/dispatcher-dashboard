import React, { useState } from "react";
import Form from "./Form";
import axios from "axios";
import { toast } from "react-toastify";
import { notifySuccessDelete, notifyError } from "../helpers";
import "./MovementList.css";

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

    // sends a delete request only if a user clicks "OK"
    if (
      window.confirm("Are you sure you would like to delete this movement?")
    ) {
      axios
        .delete("http://localhost:3001/movements", { data: { index } })
        .then((result) => {
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

  const showUpdateForm = (event, movement, index) => {
    event.preventDefault();
    setShowForm(true);
    setMovement(movement);
    setMovementIndex(index);
  };

  return (
    <div id="movementContainer">
      <h3 className="title">Current Movements:</h3>
      <hr />
      {movements.length > 0 ? (
        <ul className="list-group" id="movementList">
          {movements.map((movement, index) => (
            <li className="list-group-item" key={index}>
              <div>
                <h5>Start Location:</h5> {movement.startLat},{" "}
                {movement.startLong}
              </div>
              <br />
              <div>
                <h5>End Location:</h5> {movement.endLat}, {movement.endLong}
              </div>
              <br />
              <div>
                <h5>Description:</h5> {movement.description}
              </div>
              <br />
              <div className="btn-group">
                <button
                  onClick={(event) => {
                    showUpdateForm(event, movement, index);
                    setMovement(movement);
                  }}
                  type="button"
                  className="btn btn-primary update-btn"
                >
                  Update
                </button>
                <button
                  onClick={(event) => handleDelete(event, index)}
                  type="button"
                  className="btn btn-danger delete-btn"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h1>There are no available movements</h1>
      )}
      <div className="btn-group">
        <button
          onClick={() => {
            setShowForm(true);
            setMovement({});
            setMovementIndex(null);
          }}
          type="button"
          className="btn btn-success add-btn"
        >
          Add Movement
        </button>
      </div>
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
