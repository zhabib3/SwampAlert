import React, { useState } from "react";
import {
  Item,
  ItemGroup,
  Label,
  Container,
  Button,
  Icon,
  Segment,
  Header
} from "semantic-ui-react";
import IIncident from "../interfaces/IIncident";
import IncidentCard from "./IncidentCard";
import InputForm from "./InputForm";

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
    longitude: "-82.359085",
    latitude: "27.689335"
  },
  {
    id: "210018196",
    title: "Battery (simple)",
    timeAndDate: "10/31/2019 08:00:00 AM",
    address: "3000 BLK NW 13TH ST",
    longitude: "-82.449085",
    latitude: "29.689335"
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
    longitude: "-82.449085",
    latitude: "29.689335"
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
    longitude: "-82.449085",
    latitude: "29.689335"
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
    longitude: "-82.449085",
    latitude: "29.689335"
  }
];

const SidePane: React.FC = () => {
  const [incidents, setIncidents] = useState<IIncident[]>(DUMMY_DATA);

  return (
    <div style={{height: "100vh", display: "flex", flex: 1, flexDirection: "column"}}>
      <Container style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20, margin: 0, flex: 10, overflowY: "scroll" }}>
      <Header style={{margin: 20}} as='h2'>
    <Icon name='exclamation triangle' />
    <Header.Content>Incidents</Header.Content>
  </Header>
      <ItemGroup divided >
        {incidents.map(incident => (
          <IncidentCard incident={incident} />
        ))}
      </ItemGroup>
      </Container>
     
      <Segment style={{flex: 1, margin: 0, borderRadius: 0}} inverted textAlign="center">
        <InputForm />
      </Segment>
    </div>
  );
};

export default SidePane;
