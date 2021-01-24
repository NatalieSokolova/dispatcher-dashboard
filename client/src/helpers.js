import { toast } from "react-toastify";

const notifySuccessPost = (message) =>
  toast.success(message, {
    autoClose: 5000,
    // hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
  });

const notifySuccessDelete = (message) =>
  toast.success(message, {
    autoClose: 5000,
    // hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
  });

const notifySuccessUpdate = (message) =>
  toast.success(message, {
    autoClose: 5000,
    // hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
  });

const notifyEmptyFields = (message) =>
  toast.warning(message, {
    autoClose: 5000,
    // hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
  });

const notifyDuplicate = (message) =>
  toast.error(message, {
    autoClose: 5000,
    // hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
  });

const notifyError = (message) =>
  toast.error(message, {
    autoClose: 5000,
    // hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
  });

// checks is a movement already exists
const isDuplicate = (obj, arr) => {
  return arr.find(
    (element) =>
      obj.startLat === element.startLat &&
      obj.startLong === element.startLong &&
      obj.endLat === element.endLat &&
      obj.endLong === element.endLong &&
      obj.description === element.description
  );
};

// checks if all the fields in a form are filled out
const isFilledOut = (obj) => {
  console.log("OBJ: ", obj);
  return (
    obj.startLat &&
    obj.startLong &&
    obj.endLat &&
    obj.endLong &&
    obj.description
  );
};

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
const generateLocationData = (array) => {
  let cities = [];

  array.forEach((element) => {
    const startCoordinates = [
      Number(element.startLat),
      Number(element.startLong),
    ];

    cities.push(startCoordinates);
  });
  return cities;
};

const addLocation = (location1, location2, arr) => {
  if (location1) {
    if (location1[0] !== location2[0] && location1[1] !== location2[1]) {
      return arr.push(location2);
    }
  } else {
    return arr.push(location2);
  }
};

const findCurrentMovement = (arr, location) => {
  return arr.find(
    (element) =>
      Number(element.startLat) === location[0] &&
      Number(element.startLong) === location[1]
  );
};

const removeLocation = (arr, location) => {
  const index = arr.findIndex(
    (loc) => loc[0] === location[0] && loc[1] === location[1]
  );

  return arr.splice(index, 1);
};

export {
  isDuplicate,
  isFilledOut,
  notifySuccessPost,
  notifySuccessDelete,
  notifySuccessUpdate,
  notifyEmptyFields,
  notifyDuplicate,
  notifyError,
  findClosest,
  generateLocationData,
  addLocation,
  findCurrentMovement,
  removeLocation,
};
