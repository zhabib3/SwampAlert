# SquadUp
###### Spring 2020


#### Setting Up
Install and configure necessary prereqs:
- Node.js & NPM (https://nodejs.org/en/)
- Git
- Your preferred code editor
  
Clone the repo then run `npm install` This will only install dependencies for the server. Once they're installed run `npm run client-install` in order to install dependencies for Frontend.

#### Running the App
For any command to work you should be in the root dir. There are essentially 2 different modules in this project:
- server (root directory - Entry point: **server.js**)
- client (/root/client directory - Entry point **src/App.tsx**)

You can run both client and server concurrently. Hot reload has been configured so any changes you make will restart client and server for ease of dev.

**Run both client & server** 
`npm run dev`

**Run just the server**
`npm run server`

**Run just the client**
`npm run client`

There's a simple example on App.tsx on how to call the server endpoint, change the state and displaying it on the React component
