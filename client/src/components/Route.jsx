import React from "react";
import {
  findClosest,
  generateLocationData,
  addLocation,
  findCurrentMovement,
  removeLocation,
} from "../helpers";
import "./Route.css";

export default function Route({ movements, route, setRoute, setMapData }) {
  // uses RoseRocket office coordinates as a starting point
  let startingLocation = [43.647434073309206, -79.3736451878583];

  const showRoute = () => {
    return [setRoute(generateRoute()), setMapData("Route")];
  };

  // REFACTOR:
  // on first iteration of the loop find movement with closest starting location
  // after first iteration, check if end coords of the same movement are closer than the closest starting coords of a new movement
  // after visiting each city's starting coords add that city's end coords to the arr
  // after visiting each location remove it from the arr to avoid visiting the same location twice
  // change loop's stopping condition (because locationStartCoords.length will be changing inside the loop)
  // when done => move logic to the backend (post route for driverRoute?)

  const generateRoute = () => {
    let generatedRoute = [];
    // creates a list of movements' starting coordinates
    let locationStartCoords = generateLocationData(movements);

    const numOfIterations = locationStartCoords.length;
    // loops over locationStartCoords
    for (let i = 0; i < numOfIterations; i++) {
      // finds movement with starting coordinates, closest to the startingLocation
      const closest = findClosest(startingLocation, locationStartCoords);

      // gets coordinates for the last location in generatedRoute
      let lastVisited = generatedRoute[generatedRoute.length - 1];

      // first checks if lastVisited is defined(if generatedRoute has any data)
      // then checks if lastVisited is the same as next closest location
      addLocation(lastVisited, closest, generatedRoute);

      // gets data for current movement (both start and end coordinates)
      const currentMovement = findCurrentMovement(movements, closest);

      // removes startingLocation from locationStartCoords to avoid duplication
      removeLocation(locationStartCoords, closest);

      // pushes ending coordinates of the closest city to generatedRoute
      generatedRoute.push([
        Number(currentMovement.endLat),
        Number(currentMovement.endLong),
      ]);

      // reassigns value of the startingLocation to the end coordinates of the current movement
      startingLocation = [
        Number(currentMovement.endLat),
        Number(currentMovement.endLong),
      ];
    }
    return generatedRoute;
  };

  return (
    <div id="route">
      <div>
        <h3 className="title">Current Route:</h3>
        <hr />
        <div id="route-box">
          {route.length > 0 ? (
            <ul>
              <br />
              {route.map((location, index) => (
                <li key={index}>{`[${location[0]}, ${location[1]}]`}</li>
              ))}
            </ul>
          ) : (
            <div>Please, generate ​Driver Route​ first</div>
          )}
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-success add-btn"
            onClick={showRoute}
          >
            Generate ​New Driver Route​
          </button>
        </div>
      </div>
    </div>
  );
}
