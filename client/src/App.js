import React, { useState, useEffect } from "react";
import MovementList from "./components/MovementList";
import Map from "./components/Map";
import Route from "./components/Route";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notifyError } from "./helpers";
import axios from "axios";
import "./App.css";

function App() {
  toast.configure();

  const [movements, setMovements] = useState([]);
  const [route, setRoute] = useState([]);
  const [mapData, setMapData] = useState("Movements");

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/movements",
    })
      .then((result) => {
        setMovements(result.data);
      })
      .catch((err) => {
        notifyError("OOPS! Something went wrong. Please, try again");
        console.log(err);
      });
  }, [movements.length]);

  return (
    <div>
      <div id="dashboard">
        <MovementList movements={movements} setMovements={setMovements} />
        <Map
          movements={movements}
          route={route}
          mapData={mapData}
          setMapData={setMapData}
        />
      </div>
      <Route
        movements={movements}
        route={route}
        setRoute={setRoute}
        mapData={mapData}
        setMapData={setMapData}
      />
    </div>
  );
}

export default App;
