import React from "react";
import "./Route.css";

export default function Route({ movements, route, setRoute }) {
  // console.log("MV: ", movements);

  const findClosestLocation = (startingLocation, locationData) => {
    const vectorDistance = (dx, dy) => {
      return Math.sqrt(dx * dx + dy * dy);
    };

    const locationDistance = (location1, location2) => {
      const dx = location1.latitude - location2.latitude,
        dy = location1.longitude - location2.longitude;

      return vectorDistance(dx, dy);
    };

    return locationData.reduce((prev, curr) => {
      const prevDistance = locationDistance(startingLocation, prev),
        currDistance = locationDistance(startingLocation, curr);
      console.log(prevDistance < currDistance ? prev : curr);
      return prevDistance < currDistance ? prev : curr;
    });
  };

  let startingLocation = {
    latitude: 43.65107,
    longitude: -79.347015,
  };

  return (
    <div id="route">
      {/* <button onClick={generateRoute} type="submit"> */}
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-success"
          // onClick={generateRoute}
          onClick={() => findClosestLocation(startingLocation, movements)}
        >
          Generate Route
        </button>
      </div>
      <div>Route</div>
    </div>
  );
}
