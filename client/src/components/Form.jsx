import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  isDuplicate,
  isFilledOut,
  notifyError,
  notifySuccessPost,
  notifySuccessUpdate,
  notifyEmptyFields,
  notifyDuplicate,
} from "../helpers";
import "./Form.css";

export default function Form({
  movements,
  setMovements,
  movementIndex,
  movement,
  setMovement,
  setShowForm,
}) {
  toast.configure();

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    // updates state with form input values
    setMovement({
      ...movement,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // object, which will be sent in a post or update request
    const newMovement = {
      startLat: movement.startLat,
      startLong: movement.startLong,
      endLat: movement.endLat,
      endLong: movement.endLong,
      description: movement.description,
    };

    // sends either update or post request based on whether "update" or "add movement" btn was clicked
    movementIndex !== null
      ? handleUpdate(newMovement, movementIndex)
      : handlePost(newMovement);
  };

  const handlePost = (obj) => {
    // checks if all the fields in a form are filled out first
    if (isFilledOut(obj)) {
      // checks if a movement with the same values already exists
      if (!isDuplicate(movement, movements)) {
        axios
          .post("http://localhost:3001/movements", obj)
          .then(
            (result) => setMovement({}),
            setMovements((prev) => [...prev, obj]),
            // hides form on successful submit
            setShowForm(false),
            notifySuccessPost("Movement created!")
          )
          .catch((err) => {
            notifyError("OOPS! Something went wrong. Please, try again");
            console.log(err);
          });
      } else {
        notifyDuplicate("Sorry, movement already exists!");
      }
    } else {
      notifyEmptyFields("Please, fill out all the fields!");
    }
  };

  const handleUpdate = (obj, index) => {
    // checks if all the fields in a form are filled out first
    if (isFilledOut(obj)) {
      // checks if a movement with the same values already exists
      if (!isDuplicate(movement, movements)) {
        axios
          .put("http://localhost:3001/movements", {
            data: { index: index, movement: obj },
          })
          .then(
            (result) => setMovement({}),
            setMovements((prev) => [...prev, obj]),
            // hides form on successful submit
            setShowForm(false),
            notifySuccessUpdate("Movement updated!")
          )
          .catch((err) => {
            notifyError("OOPS! Something went wrong. Please, try again");
            console.log(err);
          });
      } else {
        notifyDuplicate("Sorry, movement already exists!");
      }
    } else {
      notifyEmptyFields("Please, fill out all the fields!");
    }
  };

  return (
    <form className="form-horizontal" id="movement-form">
      <div className="form-group">
        <label htmlFor="start" className="col-sm-2 control-label">
          start:
        </label>
        <span className="input-group">
          <input
            autoComplete="off"
            // used to show values, when updating an existing movement
            value={movement.startLat || ""}
            type="text"
            name="startLat"
            className="form-control"
            placeholder="latitude"
            onChange={handleChange}
          />
          <input
            value={movement.startLong || ""}
            type="text"
            name="startLong"
            className="form-control"
            placeholder="longitude"
            onChange={handleChange}
          />
        </span>
      </div>
      <div className="form-group">
        <label htmlFor="end" className="col-sm-2 control-label">
          end:
        </label>
        <span className="input-group">
          <input
            value={movement.endLat || ""}
            type="text"
            name="endLat"
            className="form-control"
            placeholder="latitude"
            onChange={handleChange}
          />
          <input
            value={movement.endLong || ""}
            type="text"
            name="endLong"
            className="form-control"
            placeholder="longitude"
            onChange={handleChange}
          />
        </span>
      </div>
      <div className="form-group">
        <label htmlFor="description" className="col-sm-2 control-label">
          description:
        </label>
        <div>
          <textarea
            value={movement.description || ""}
            type="text"
            name="description"
            className="form-control"
            placeholder="freight description"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-offset-2 btn-group">
          <button
            onClick={handleSubmit}
            type="button"
            className="btn btn-success add-btn"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
