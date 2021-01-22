import React from "react";
import axios from "axios";
import { isDuplicate } from "../helpers";

export default function Form({
  state,
  movementIndex,
  movement,
  setMovement,
  setShowForm,
}) {
  // const [movement, setMovement] = useState({
  //   start: null,
  //   end: null,
  //   description: "",
  // });

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setMovement({
      ...movement,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMovement = {
      start: movement.start,
      end: movement.end,
      description: movement.description,
    };

    // check for movementIndex
    console.log("IND: ", movementIndex);

    movementIndex !== null
      ? handleUpdate(newMovement, movementIndex)
      : handlePost(newMovement);

    return [setMovement({}), setShowForm(false)];
  };

  const handlePost = (obj) => {
    console.log("POST IND: ", movementIndex);

    if (obj.start && obj.end && obj.description) {
      if (!isDuplicate(movement, state.movements)) {
        axios
          .post("http://localhost:3001/movements", obj)
          .then((result) =>
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

    if (!isDuplicate(movement, state.movements)) {
      axios
        .put("http://localhost:3001/movements", {
          data: { index: index, movement: obj },
        })
        .then((result) =>
          console.log("MOVEMENT UPDATED SUCCESSFULLY! TOAST later!")
        )
        .catch((err) => console.log(err));
    } else {
      console.log("Sorry, movement already exists! TOAST later!");
    }
  };

  return (
    <div>
      {console.log("MOV: ", movement)}
      <form className="form-horizontal" id="movement-form">
        <div className="form-group">
          <label htmlFor="start" className="col-sm-2 control-label">
            start:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="start"
              className="form-control"
              placeholder="start location"
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
              type="text"
              name="end"
              className="form-control"
              placeholder="end location"
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
