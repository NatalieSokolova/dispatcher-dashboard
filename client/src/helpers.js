// checks is a movement already exists
const isDuplicate = (obj, arr) => {
  return arr.find(
    (element) =>
      obj.start === element.start &&
      obj.end === element.end &&
      obj.description === element.description
  );
};

const isFilledOut = (obj) => {
  return obj.start && obj.end && obj.description;
};

export { isDuplicate, isFilledOut };
