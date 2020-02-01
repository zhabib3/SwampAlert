import React, { useState, useEffect, Fragment } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import InputForm from "./components/InputForm"
import "./App.css";
import SidePane from "./components/SidePane";
import MapContainer from "./components/MapContainer";
import MapWrapper from './components/MapWrapper';

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
      <Grid centered columns={2} style={{minHeight: "100vh", backgroundColor: "#fff"}}>
        <GridColumn style={{padding: 0}} width={4}>
          <SidePane />
        </GridColumn>

        <GridColumn style={{padding: 0}} width={12}>
        <MapWrapper></MapWrapper>
        </GridColumn>
      </Grid>
    </div>
    // <Fragment>
    //   {serverMsg}
    // </Fragment>
  );
};

export default App;
