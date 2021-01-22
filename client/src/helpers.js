// checks is a movement already exists
const isDuplicate = (obj, arr) => {
  let result = false;
  arr.forEach((movementObj) => {
    if (
      obj.start === movementObj.start &&
      obj.end === movementObj.end &&
      obj.description === movementObj.description
    ) {
      result = true;
    }
  });
  // console.log("RES: ", result);
  return result;
};

const isFilledOut = (obj) => {
  return obj.start && obj.end && obj.description ? true : false;
};

export { isDuplicate, isFilledOut };
