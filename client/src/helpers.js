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

export { isDuplicate, isFilledOut };
