import React, { useState } from "react";
import { Item, ItemGroup, Label } from "semantic-ui-react";
import IIncident from "../interfaces/IIncident";
import IncidentCard from "./IncidentCard";

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
  }
];

const SidePane: React.FC = () => {
  const [incidents, setIncidents] = useState<IIncident[]>(DUMMY_DATA);

  return (
    <div>
      <ItemGroup divided style={{ padding: 20 }}>
        {incidents.map(incident => <IncidentCard incident={incident} />)}
      </ItemGroup>
    </div>
  );
};

export default SidePane;
