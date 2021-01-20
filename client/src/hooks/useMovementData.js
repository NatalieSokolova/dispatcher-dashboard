import { useState, useEffect } from "react";
import axios from "axios";

const useMovementData = () => {
  const [state, setState] = useState({ movements: [] });

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/movements",
    })
      .then((result) =>
        setState((prev) => ({ ...prev, movements: result.data }))
      )
      .catch((err) => console.log(err));
  }, []);

  return {
    state,
    setState,
  };
};

export default useMovementData;
