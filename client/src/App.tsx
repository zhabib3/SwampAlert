import React, { useState, useEffect, Fragment, SyntheticEvent } from "react";
import { Grid, GridColumn, Button, ButtonProps, ItemProps } from "semantic-ui-react";
import InputForm from "./components/InputForm"
import "./App.css";
import SidePane from "./components/SidePane";
import MapWrapper from './components/MapWrapper';
import IIncident from "./interfaces/IIncident";

const SERVER_URL = "http://localhost:5000/incident/";
const GET_CROWD_URL = 'http://localhost:5000/incident/getcrowd';

const App: React.FC = () => {
  const [incidents, setIncidents] = useState<any[]>([{
    id: '',
    narrative: '',
    offense_date: '',
    address: '',
  }]);
  const [selectedIncident, setSelectedIncident] = useState(incidents[0].id);


  const handleOnClickMarker = (event: SyntheticEvent, data: ButtonProps) => {
    setSelectedIncident(data.value);
  }

  const handleIncidentSelect = (event: SyntheticEvent, data: ButtonProps) => {
    setSelectedIncident(data.value);
  }

  const handleIncidentRequests = async () => {
    await fetch(SERVER_URL)
      .then(response => response.json())
      .then(data => {console.log(data); setIncidents(data)});
    // await fetch(GET_CROWD_URL)
    //   .then(response => response.json())
    //   .then(data => { console.log(data); setIncidents(data) });
  }
  useEffect(() => {
    // fetch(SERVER_URL)
    //   .then(response => response.json())
    //   .then(data => setIncidents(data))
    handleIncidentRequests();
  }, []);

  return (
    <div>
      <Grid centered columns={2} style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
        <GridColumn style={{ padding: 0 }} width={4}>
          {incidents[1] && <SidePane incidentsData={incidents} selectedIncident={selectedIncident} handleIncidentSelect={handleIncidentSelect} />}
        </GridColumn>

        <GridColumn style={{ padding: 0 }} width={12}>
  {incidents[1] && <MapWrapper handleOnClickMarker={handleOnClickMarker} markerData={incidents} selected={selectedIncident}></MapWrapper> }
        </GridColumn>
      </Grid>
    </div>
    // <Fragment>
    //   {serverMsg}
    // </Fragment>
  );


};

export default App;
