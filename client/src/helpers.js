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

export {
  isDuplicate,
  isFilledOut,
  notifySuccessPost,
  notifySuccessDelete,
  notifySuccessUpdate,
  notifyEmptyFields,
  notifyDuplicate,
  notifyError,
};
