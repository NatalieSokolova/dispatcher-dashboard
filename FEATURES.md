# Rose Rocket Coding Challenge

The app is built with React (frontend), Express (backend), and uses Axios to send requests.
It uses Leaflet package for Map component, react-toastify library for alerts, and Bootstrap for styling

### API:

- the movements routes can be found in api/routes/movements.js
- there is no database, but data is stored in movementList array, which can be found in api/routes/movements.js (several movements are already generated)

### CLIENT:

- components and stylesheets are located in client/src/components
- helper functions can be found in client/src/helpers.js

### Demo

!["Dispatcher generates a route"](https://recordit.co/haoDjog9NR.gif)

!["Dispatcher attempts to create a new movement"](https://recordit.co/RTqZ7qfTlM.gif)

## Features

### A dispatcher can:

- create​ new movements for arbitrary goods that should be picked up at a ​Start Location​ and dropped off at the ​End Location​
- see the list of movements and the ​description of freight on the card
- see the movements on the map (every movement is represented on the map with 2 points connected with a colored line. A random color is generated for every movement. Please, be patient, sometimes it takes a second for colors to show up). Movement's start and end location, and description are shown on hover over the marker
- create unique movements (if an identical movement already exists - a dispatcher is shown an alert)
- update an existing movement, as long as the updated movement is unique (otherwise - a dispatcher is shown an alert)
- delete​ movements (they are shown a confirmation window first)
- generate a ​Driver Route​ that consists of all available locations that need to be visited (a starting point is set at Rose Rocket office location. From there, the route begins at start coordinates closest to the starting point. The next position is the end location of the same movement. From there, the start coordinates, closest to the previous end position are found and so on)
- see ​Driver Route​ on the map (continuous line of the same color). One needs to generate a new route after a movement has been created/deleted/updated
- toggle between Movements​ and ​Driver Route​ views (to see the route, a dispatched needs to generate the route first)
- enjoy this application on any device, as its design is responsive
