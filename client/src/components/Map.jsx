import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  Polyline,
} from "react-leaflet";
import "./Map.css";

export default function Map({ movements }) {
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

        {movements.map((movement, index) => (
          <div key={index}>
            <Marker position={[movement.startLat, movement.startLong]}>
              <Tooltip
                direction="bottom"
                offset={[0, 20]}
                // permanent
              >
                <span>
                  Start: {movement.startLat}, {movement.startLong} / End:{" "}
                  {movement.endLat}, {movement.endLong}
                  <br />
                  {movement.description}
                </span>
              </Tooltip>
            </Marker>

            <Marker position={[movement.endLat, movement.endLong]}>
              <Tooltip
                direction="bottom"
                offset={[0, 25]}
                // permanent
              >
                <span>
                  Start: {movement.startLat}, {movement.startLong} / End:{" "}
                  {movement.endLat}, {movement.endLong}
                  <br />
                  {movement.description}
                </span>
              </Tooltip>
            </Marker>
            <Polyline
              positions={[
                [movement.startLat, movement.startLong],
                [movement.endLat, movement.endLong],
              ]}
              pathOptions={{
                color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
              }}
            />
          </div>
        ))}
      </MapContainer>
    </div>
  );
}
