import React from "react";
import { Marker, Tooltip, Polyline } from "react-leaflet";

export default function RouteData({ route }) {
  return (
    <div>
      {route.map((location, index) => (
        <div key={index}>
          <Marker position={location}>
            <Tooltip direction="bottom" offset={[0, 20]}>
              <span>
                Coordinates: {location[0]}, {location[1]}
              </span>
            </Tooltip>
          </Marker>
          <Polyline
            positions={route}
            pathOptions={{
              color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
