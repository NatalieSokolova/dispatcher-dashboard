import React, { useState } from "react";
import axios from "axios";

export default function NewMovement() {
  const [movement, setMovement] = useState({
    start: null,
    end: null,
    description: "",
  });

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setMovement({
      ...movement,
      [name]: value,
    });

    console.log("NAME: ", name);
    console.log("value: ", value);
    console.log("movement: ", movement);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMovement = {
      start: movement.start,
      end: movement.end,
      description: movement.description,
    };

    // console.log("NEW: ", newMovement);
    console.log("MOVEMENT: ", movement);
    // if (newMovement.start && newMovement.end && newMovement.description) {
    axios
      .post("http://localhost:3001/movements", newMovement)
      .then(console.log.bind(console))
      .catch(console.error.bind(console));
    // }
  };

  return (
    <div>
      <div>Add New Movement:</div>
      <br />
      <form className="form-horizontal">
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
              className="btn btn-default"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
