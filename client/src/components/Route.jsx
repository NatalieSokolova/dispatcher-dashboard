import React from "react";
import {
  findClosest,
  generateLocationData,
  addLocation,
  findCurrentMovement,
  removeLocation,
} from "../helpers";
import "./Route.css";

export default function Route({
  movements,
  route,
  setRoute,
  mapData,
  setMapData,
}) {
  // uses RoseRocket office coordinates as a starting point
  let startingLocation = [43.647434073309206, -79.3736451878583];

  // console.log("ROUTE!: ", route);

  const showRoute = () => {
    return [setRoute(generateRoute()), setMapData("Route")];
  };

  const generateRoute = () => {
    let generatedRoute = [];
    // creates a list of movements' starting coordinates
    let locationStartCoords = generateLocationData(movements);

    const numOfIterations = locationStartCoords.length;
    // loops over locationStartCoords
    for (let i = 0; i < numOfIterations; i++) {
      // finds movement with starting coordinates, closest to the startingLocation
      const closest = findClosest(startingLocation, locationStartCoords);
      // console.log("closest: ", closest);

      // pushes starting coordinates of the closest city to generatedRoute
      let lastVisited = generatedRoute[generatedRoute.length - 1];

      // first checks if lastVisited is defined(if generatedRoute has any data)
      addLocation(lastVisited, closest, generatedRoute);
      // console.log("generatedRouteBefore: ", generatedRoute);

      // gets data for current movement
      const currentMovement = findCurrentMovement(movements, closest);
      // console.log("CURRENT: ", currentMovement);

      // removes startingLocation from locationStartCoords
      removeLocation(locationStartCoords, closest);

      // pushes ending coordinates of the closest city to generatedRoute
      addLocation(
        lastVisited,
        [Number(currentMovement.endLat), Number(currentMovement.endLong)],
        generatedRoute
      );

      console.log("generatedRouteAfter: ", generatedRoute);
      // console.log("INDEX: ", index);

      // reassigns value of the startingLocation to the end coordinates of the current movement
      startingLocation = [
        Number(currentMovement.endLat),
        Number(currentMovement.endLong),
      ];
      // console.log("startingLocation: ", startingLocation);
      // console.log("locationStartCoords: ", locationStartCoords);
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
            <div>
              {route.map((location, index) => (
                <span key={index}> {`${location[0]}, ${location[1]} =>`}</span>
              ))}
            </div>
          ) : (
            <div>Please, generate route first</div>
          )}
        </div>
        <div className="btn-group">
          <button type="button" className="btn btn-success" onClick={showRoute}>
            Generate Route
          </button>
        </div>
      </div>
    </div>
  );
}
