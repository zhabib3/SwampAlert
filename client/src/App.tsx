import React, { useState, useEffect, Fragment } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import InputForm from "./components/InputForm"
import "./App.css";
import SidePane from "./components/SidePane";
import MapContainer from "./components/MapContainer";
import MapWrapper from './components/MapWrapper';
import IIncident from "./interfaces/IIncident";

const SERVER_URL = "http://localhost:5000/";

const DUMMY_DATA: IIncident[] = [
  {
    id: "210018194",
    title: "Battery (simple)",
    timeAndDate: "10/31/2019 11:00:00 PM",
    address: "4000 BLK NW 13TH ST",
    longitude: "-82.339085",
    latitude: "29.689335"
  },
  {
    id: "210018195",
    title: "Theft Petit",
    timeAndDate: "10/30/2019 13:00:00 PM",
    address: "4000 BLK NW 13TH ST",
    longitude: "-82.330011",
    latitude: "27.687035"
  },
  {
    id: "210018196",
    title: "Battery (simple)",
    timeAndDate: "10/31/2019 08:00:00 AM",
    address: "3000 BLK NW 13TH ST",
    longitude: "-82.337371",
    latitude: "29.650838"
  },
  {
    id: "210018197",
    title: "Drug Violation",
    timeAndDate: "10/31/2019 08:00:00 AM",
    address: "4000 BLK NW 13TH ST",
    longitude: "-82.341254",
    latitude: "29.651962"
  },
  {
    id: "210018197",
    title: "Drug Violation",
    timeAndDate: "10/31/2019 08:00:00 AM",
    address: "4000 BLK NW 13TH ST",
    longitude: "-82.449085",
    latitude: "29.689335"
  },
  {
    id: "210018197",
    title: "Drug Violation",
    timeAndDate: "10/31/2019 08:00:00 AM",
    address: "4000 BLK NW 13TH ST",
    longitude: "-82.344730",
    latitude: "29.651020"
  },
  {
    id: "210018197",
    title: "Drug Violation",
    timeAndDate: "10/31/2019 08:00:00 AM",
    address: "4000 BLK NW 13TH ST",
    longitude: "-82.449085",
    latitude: "29.689335"
  },
  {
    id: "210018197",
    title: "Drug Violation",
    timeAndDate: "10/31/2019 08:00:00 AM",
    address: "4000 BLK NW 13TH ST",
    longitude: "-82.348313",
    latitude: "29.650321"
  },
  {
    id: "210018197",
    title: "Drug Violation",
    timeAndDate: "10/31/2019 08:00:00 AM",
    address: "4000 BLK NW 13TH ST",
    longitude: "-82.343496",
    latitude: "29.648587"
  }
];
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
          <SidePane incidentsData={DUMMY_DATA} />
        </GridColumn>

        <GridColumn style={{padding: 0}} width={12}>
        <MapWrapper markerData={DUMMY_DATA}></MapWrapper>
        </GridColumn>
      </Grid>
    </div>
    // <Fragment>
    //   {serverMsg}
    // </Fragment>
  );

  
};

export default App;
