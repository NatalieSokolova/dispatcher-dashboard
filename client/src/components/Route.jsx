import React from "react";
import "./Route.css";

export default function Route({ movements, route, setRoute }) {
  const checkRoute = (route, coordinates) => {
    return route.some((city) =>
      coordinates.every((position, index) => position === city[index])
    );
  };

  const generateRoute = () => {
    let cities = [];

    // loops over movements
    movements.forEach((movement, index) => {
      const startCoordinates = [
        Number(movement.startLat),
        Number(movement.startLong),
      ];
      const endCoordinates = [
        Number(movement.endLat),
        Number(movement.endLong),
      ];
      // check if starting city coordinates are present in a route array
      // some() tests whether at least one city passes check defined in every()
      // every() tests whether lat and long are present in cities
      if (!checkRoute(cities, startCoordinates)) {
        // if not => push city into cities
        cities.push(startCoordinates);
      } else if (!checkRoute(cities, endCoordinates)) {
        cities.push(endCoordinates);
      }

      return cities;
    });
    console.log("CITIES: ", cities);
  };

  return (
    <div id="route">
      {/* <button onClick={generateRoute} type="submit"> */}
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-success"
          onClick={generateRoute}
        >
          Generate Route
        </button>
      </div>
      <div>Route</div>
    </div>
  );
}
