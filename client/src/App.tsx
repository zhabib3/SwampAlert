import React, { useState, useEffect, Fragment } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import "./App.css";
import SidePane from "./components/SidePane";

const SERVER_URL = "http://localhost:5000/";

const App: React.FC = () => {
  const [serverMsg, setServerMsg] = useState("Loading...");

  useEffect(() => {
    fetch(SERVER_URL)
      .then(response => response.text())
      .then(data => setServerMsg(data));
  }, []);

  return (
    <div>
      <Grid columns={2} style={{minHeight: "100vh", backgroundColor: "#fff"}}>
        <GridColumn width={4}>
          <SidePane />
        </GridColumn>

        <GridColumn width={12}>Map</GridColumn>
      </Grid>
    </div>
  );
};

export default App;
