// import React from "react";
// import "./Route.css";

// export default function Route({ movements, route, setRoute }) {
//   let startingLocation = [43.65107, -79.347015];

// const findClosestLocation = (startingLocation, locationData) => {
// const vectorDistance = (dx, dy) => {
//   return Math.sqrt(dx * dx + dy * dy);
// };

// const locationDistance = (location1, location2) => {
//   const dx = location1[0] - location2[0],
//     dy = location1[1] - location2[1];

//   return vectorDistance(dx, dy);
// };

// return locationData.reduce((prev, curr) => {
//   const prevDistance = locationDistance(startingLocation, prev),
//     currDistance = locationDistance(startingLocation, curr);
//   return prevDistance < currDistance ? prev : curr;
// });
// };

//   const checkRoute = (route, coordinates) => {
//     return route.some((city) =>
//       coordinates.every((position, index) => position === city[index])
//     );
//   };

// const generateCoordList = () => {
//   let cities = [];
//   // loops over movements
//   movements.forEach((movement, index) => {
//     const startCoordinates = [
//       Number(movement.startLat),
//       Number(movement.startLong),
//     ];

//     cities.push(startCoordinates);

//     // const endCoordinates = [
//     //   Number(movement.endLat),
//     //   Number(movement.endLong),
//     // ];

//     // check if starting city coordinates are present in a route array
//     // some() tests whether at least one city passes check defined in every()
//     // every() tests whether lat and long are present in cities
//     // if (!checkRoute(cities, startCoordinates)) {
//     //   // if not => push city into cities
//     //   cities.push(startCoordinates);
//     // }
//   });
//   console.log("CITIES: ", cities);
//   return cities;
// };

//   const generateRoute = () => {
//     let route = [];
//     const list = generateCoordList();

//     // console.log("CLOSEST: ", closest);

//     movements.forEach((movement, index) => {
//       let closest = findClosestLocation(startingLocation, list);

//       startingLocation =
//         index > 0
//           ? (startingLocation = [
//               Number(movement.endLat),
//               Number(movement.endLong),
//             ])
//           : startingLocation;

//       route.push(closest);

//       console.log(
//         "index: ",
//         index,
//         "startingLocation: ",
//         startingLocation,
//         "closest: ",
//         closest
//       );
//     });

//     console.log("ROUTE: ", route);
//     // let cities = [];

//     // // loops over movements
//     // movements.forEach((movement, index) => {
//     // const startCoordinates = [
//     //   Number(movement.startLat),
//     //   Number(movement.startLong),
//     // ];
//     // const endCoordinates = [
//     //   Number(movement.endLat),
//     //   Number(movement.endLong),
//     // ];
//     //   // check if starting city coordinates are present in a route array
//     //   // some() tests whether at least one city passes check defined in every()
//     //   // every() tests whether lat and long are present in cities
//     //   if (!checkRoute(cities, startCoordinates)) {
//     //     // if not => push city into cities
//     //     cities.push(startCoordinates);
//     //   }
//     //   // else if (!checkRoute(cities, endCoordinates)) {
//     //   //   cities.push(endCoordinates);
//     //   // }
//     // });
//     // console.log("CITIES: ", cities);
//     // return cities;
//   };

//   return (
//     <div id="route">
//       <div className="btn-group">
//         <button
//           type="button"
//           className="btn btn-success"
//           onClick={generateRoute}
//         >
//           Generate Route
//         </button>
//       </div>
//       <div>Route</div>
//     </div>
//   );
// }
