import React, { useState } from "react";

export default function Movement({ movements, setMovements }) {
  const handleDelete = (event, index) => {
    event.preventDefault();
    console.log("I: ", index);

    if (
      window.confirm("Are you sure you would like to delete this movement?")
    ) {
      axios
        .delete("http://localhost:3001/movements", { data: { index } })
        .then((result) => {
          console.log("index: ", index);
          let updatedMovements = movements.filter((mov, i) => i !== index);
          setMovements(updatedMovements);
          console.log("MOVEMENT DELETED SUCCESSFULLY! TOAST later!");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div key={index}>
      <div>Start Location: {movement.start}</div>
      <div>End Location: {movement.end}</div>
      <div>Description: {movement.description}</div>
      <div>
        <button
          onClick={(event) => {
            showUpdateForm(event, movement, index);
            // setMovementIndex(index);
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
  );
}
