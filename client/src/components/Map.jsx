import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MovementData from "./MovementData";
import RouteData from "./RouteData";
import "./Map.css";

export default function Map({ movements, route, mapData, setMapData }) {
  return (
    <div>
      <MapContainer
        id="map"
        center={[43.6532, -79.3832]}
        zoom={4}
        scrollWheelZoom={false}
      >
        <TileLayer
          // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

          url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={access_token}"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
          access_token="pk.eyJ1IjoibmF0YWxpZXNrbHYiLCJhIjoiY2trOTNtdXRmMDhnYzJ3b2NhMmdmcDFlbCJ9.6jTgsEihWL1amNkT3KsSjA"
        />
        {mapData === "Movements" ? (
          <MovementData movements={movements} />
        ) : (
          <RouteData route={route} />
        )}
      </MapContainer>
      <div className="btn-group" id="toggle">
        {route.length > 0 ? (
          <button
            onClick={() => {
              setMapData(mapData === "Movements" ? "Route" : "Movements");
            }}
            type="button"
            className="btn btn-success"
          >
            Show {mapData === "Movements" ? "Route" : "Movements"}
          </button>
        ) : null}
      </div>
    </div>
  );
}
