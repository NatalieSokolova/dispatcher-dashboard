import React from "react";
import { Marker, Tooltip, Polyline } from "react-leaflet";

export default function MovementData({ movements }) {
  return (
    <div>
      {movements.map((movement, index) => (
        <div key={index}>
          <Marker position={[movement.startLat, movement.startLong]}>
            <Tooltip direction="bottom" offset={[0, 20]}>
              <span>
                Start: {movement.startLat}, {movement.startLong} / End:
                {movement.endLat}, {movement.endLong}
                <br />
                {movement.description}
              </span>
            </Tooltip>
          </Marker>

          <Marker position={[movement.endLat, movement.endLong]}>
            <Tooltip direction="bottom" offset={[0, 25]}>
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
    </div>
  );
}
