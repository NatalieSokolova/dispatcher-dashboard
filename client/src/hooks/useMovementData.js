import { useState, useEffect } from "react";

const useMovementData = () => {
  const [state, setState] = useState({ movements: [] });

  useEffect(() => {
    fetch("http://localhost:3001/movements")
      .then((res) => res.json(res))
      .then((res) => setState((prev) => ({ ...prev, movements: res })))
      .catch((err) => console.log(err));
  }, []);

  return {
    state,
    setState,
  };
};

export default useMovementData;
