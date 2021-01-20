import React from "react";

export default function NewMovement() {
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
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
