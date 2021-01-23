import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
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
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {movements.map((movement, index) => (
          <div key={index}>
            <Marker position={[movement.startLat, movement.startLong]}>
              <Tooltip
                direction="bottom"
                offset={[0, 20]}
                opacity={1}
                permanent
              >
                <span>
                  Location: {movement.endLat}, {movement.endLong}
                  <br />
                  {movement.description}
                </span>
              </Tooltip>
            </Marker>

            <Marker position={[movement.endLat, movement.endLong]}>
              <Tooltip
                direction="bottom"
                offset={[0, 25]}
                // opacity={1}
                permanent
              >
                <span>
                  Location: {movement.endLat}, {movement.endLong}
                  <br />
                  {movement.description}
                </span>
              </Tooltip>
            </Marker>
          </div>
        ))}
      </MapContainer>
    </div>
  );
}
