import React, { useState, useEffect } from "react";
import MovementList from "./components/MovementList";
import axios from "axios";
import "./App.css";

function App() {
  const [movements, setMovements] = useState([]);

  // console.log("MVMNTS: ", movements);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/movements",
    })
      .then((result) => {
        setMovements(result.data);
      })
      .catch((err) => console.log(err));
  }, [movements.length]);

  return (
    <div>
      <MovementList movements={movements} setMovements={setMovements} />
    </div>
  );
}

export default App;
