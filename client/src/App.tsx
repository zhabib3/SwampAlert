import React, { useState, useEffect, Fragment, SyntheticEvent } from "react";
import {
  Grid,
  GridColumn,
  Button,
  ButtonProps,
  ItemProps,
  Loader
} from "semantic-ui-react";
import InputForm from "./components/InputForm";
import "./App.css";
import SidePane from "./components/SidePane";
import MapWrapper from "./components/MapWrapper";
import IIncident from "./interfaces/IIncident";

const SERVER_URL = "http://localhost:5000/incident/";
const GET_CROWD_URL = "http://localhost:5000/incident/getcrowd";
const CROWD_DATA = require("./components/crowdData.json");

const App: React.FC = () => {
  const [incidents, setIncidents] = useState<any[]>(
    CROWD_DATA
    // {
    //   id: "",
    //   narrative: "",
    //   offense_date: "",
    //   address: "",
    //   longitude: "",
    //   latitude: "",
    //   severity: ""
    // }
  );
  const [selectedIncident, setSelectedIncident] = useState(incidents[0].id);
  const [crowdData, setCrowdData] = useState([]);

  const handleOnClickMarker = (event: SyntheticEvent, data: ButtonProps) => {
    setSelectedIncident(data.value);
  };

  const handleIncidentSelect = (event: SyntheticEvent, data: ButtonProps) => {
    setSelectedIncident(data.value);
  };

  const updateIncidents = (data) => {
    setIncidents([...incidents, data]);
  };

  const handleIncidentRequests = async () => {
    // await fetch(SERVER_URL)
    //   .then(response => response.json())
    //   .then(data => {console.log(data); setIncidents(data)});
  };

  useEffect(() => {
    async function fetchData() {
      fetch(SERVER_URL)
        .then(response => response.json())
        .then(data => setIncidents(incidents.concat(data)));
    }
    fetchData();
  }, []);

  if (incidents[0].id === "") {
    return <Loader />;
  }

  return (
    <div>
      <Grid
        centered
        columns={2}
        style={{ minHeight: "100vh", backgroundColor: "#fff" }}
      >
        <GridColumn style={{ padding: 0 }} width={4}>
          {incidents.length > 1 ? (
            <SidePane
              updateIncidents={updateIncidents}
              incidentsData={incidents}
              selectedIncident={selectedIncident}
              handleIncidentSelect={handleIncidentSelect}
            />
          ) : (
            <p>Loading..</p>
          )}
        </GridColumn>

        <GridColumn style={{ padding: 0 }} width={12}>
          {incidents.length > 1 ? (
            <MapWrapper
              handleOnClickMarker={handleOnClickMarker}
              markerData={incidents}
              selected={selectedIncident}
            ></MapWrapper>
          ) : (
            <p>Loading...</p>
          )}
        </GridColumn>
      </Grid>
    </div>
    // <Fragment>
    //   {serverMsg}
    // </Fragment>
  );
};

export default App;
