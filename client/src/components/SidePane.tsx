import React, { useState } from "react";
import {
  Item,
  ItemGroup,
  Label,
  Container,
  Button,
  Icon,
  Segment,
  Header,
  Card
} from "semantic-ui-react";
import IIncident from "../interfaces/IIncident";
import IncidentCard from "./IncidentCard";
import InputForm from "./InputForm";

interface IProps {
  incidentsData: any[];
  selectedIncident: String;
}

interface IProps {
  incidentsData: any[];
  selectedIncident: String;
}

const SidePane: React.FC<IProps> = ({ incidentsData, selectedIncident }) => {

  const renderSelectedIncident = () => {
    const data =
      incidentsData.filter(incident => incident.id === selectedIncident)[0] ||
      incidentsData[3];
    return <IncidentCard incident={data} />;
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flex: 1,
        flexDirection: "column"
      }}
    >
      <Container
        style={{
          paddingTop: 20,
          paddingLeft: 20,
          paddingRight: 20,
          margin: 0,
          flex: 10,
          overflowY: "scroll"
        }}
      >
        <Header style={{ margin: 20 }} as="h2">
          <Icon name="exclamation triangle" />
          <Header.Content>Incidents</Header.Content>
        </Header>

        <ItemGroup divided>
          {renderSelectedIncident()}

          {incidentsData.map(incident => (
            <IncidentCard incident={incident} />
          ))}
        </ItemGroup>
      </Container>
      <Segment
        style={{ flex: 1, margin: 0, borderRadius: 0 }}
        inverted
        textAlign="center"
      >
        <InputForm />
      </Segment>
    </div>
  );
};

export default SidePane;
