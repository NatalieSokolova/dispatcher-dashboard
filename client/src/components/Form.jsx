import React from "react";
import axios from "axios";
import { isDuplicate, isFilledOut } from "../helpers";

export default function Form({
  movements,
  setMovements,
  movementIndex,
  movement,
  setMovement,
  setShowForm,
}) {
  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    // console.log("NAME: ", name);
    // console.log("VALUE: ", value);

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

    // console.log("IND: ", movementIndex);

    // sends either update or post request based on whether "update" or "add movement" btn was clicked
    movementIndex !== null
      ? handleUpdate(newMovement, movementIndex)
      : handlePost(newMovement);
  };

  const handlePost = (obj) => {
    console.log("POST IND: ", movementIndex);

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
            console.log("MOVEMENT SUBMITTED SUCCESSFULLY! TOAST later!")
          )
          .catch((err) => console.log(err));
      } else {
        console.log("Sorry, movement already exists! TOAST later!");
      }
    } else {
      console.log("Please, fill out all the fields! TOAST later!");
    }
  };

  const handleUpdate = (obj, index) => {
    console.log("UPD IND: ", movementIndex);

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
            console.log("MOVEMENT UPDATED SUCCESSFULLY! TOAST later!")
          )
          .catch((err) => console.log(err));
      } else {
        console.log("Sorry, movement already exists! TOAST later!");
      }
    } else {
      console.log("Please, fill out all the fields! TOAST later!");
    }
  };

  return (
    <div>
      {/* {console.log("MOV: ", movement)} */}
      <form className="form-horizontal" id="movement-form">
        <div className="form-group">
          <label htmlFor="start" className="col-sm-2 control-label">
            start:
          </label>
          <div className="col-sm-10">
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
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="end" className="col-sm-2 control-label">
            end
          </label>
          <div className="col-sm-10">
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
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description" className="col-sm-2 control-label">
            description
          </label>
          <div className="col-sm-10">
            <input
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
          <div className="col-sm-offset-2 col-sm-10">
            <button
              onClick={handleSubmit}
              type="submit"
              // className="btn btn-default"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
