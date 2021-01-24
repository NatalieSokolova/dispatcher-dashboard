import React from "react";
import "./Route.css";

export default function Route({ movements, route, setRoute }) {
  // uses RoseRocket office coordinates as a starting point
  let startingLocation = [43.647434073309206, -79.3736451878583];

  // finds closest location to a starting point
  const findClosest = (startingLocation, locationData) => {
    const vectorDistance = (dx, dy) => {
      return Math.sqrt(dx * dx + dy * dy);
    };

    const locationDistance = (location1, location2) => {
      const dx = location1[0] - location2[0],
        dy = location1[1] - location2[1];

      return vectorDistance(dx, dy);
    };

    return locationData.reduce((prev, curr) => {
      const prevDistance = locationDistance(startingLocation, prev),
        currDistance = locationDistance(startingLocation, curr);
      return prevDistance < currDistance ? prev : curr;
    });
  };

  // creates a list of movements' starting coordinates
  const generateLocationData = () => {
    let cities = [];
    // loops over movements
    movements.forEach((movement) => {
      const startCoordinates = [
        Number(movement.startLat),
        Number(movement.startLong),
      ];

      cities.push(startCoordinates);
    });
    return cities;
  };

  const generateRoute = () => {
    let generatedRoute = [];
    // creates a list of movements' starting coordinates
    let locationStartCoords = generateLocationData();

    const numOfIterations = locationStartCoords.length;
    // loops over locationStartCoords
    for (let i = 0; i < numOfIterations; i++) {
      // finds movement with starting coordinates, closest to the startingLocation
      const closest = findClosest(startingLocation, locationStartCoords);
      // console.log("closest: ", closest);

      // pushes starting coordinates of the closest city to generatedRoute
      let lastVisited = generatedRoute[generatedRoute.length - 1];
      // first checks if lastVisited is defined(if generatedRoute has any data)
      if (lastVisited) {
        if (lastVisited[0] !== closest[0] && lastVisited[1] !== closest[1]) {
          generatedRoute.push(closest);
        }
      } else {
        generatedRoute.push(closest);
      }
      console.log("generatedRouteBefore: ", generatedRoute);

      // gets data for current movement
      const currentMovement = movements.find(
        (movement) =>
          Number(movement.startLat) === closest[0] &&
          Number(movement.startLong) === closest[1]
      );
      console.log("CURRENT: ", currentMovement);

      // removes startingLocation from locationStartCoords
      const index = locationStartCoords.findIndex(
        (loc) => loc[0] === closest[0] && loc[1] === closest[1]
      );

      // pushes ending coordinates of the closest city to generatedRoute
      generatedRoute.push([
        Number(currentMovement.endLat),
        Number(currentMovement.endLong),
      ]);
      console.log("generatedRouteAfter: ", generatedRoute);

      locationStartCoords.splice(index, 1);

      console.log("INDEX: ", index);

      // reassigns value of the startingLocation to the end coordinates of the current movement
      startingLocation = [
        Number(currentMovement.endLat),
        Number(currentMovement.endLong),
      ];
      console.log("startingLocation: ", startingLocation);
      console.log("locationStartCoords: ", locationStartCoords);
    }
  };

  return (
    <div id="route">
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
