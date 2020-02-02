import React, { useState, SyntheticEvent } from "react";
import {
  Item,
  ItemGroup,
  Label,
  Container,
  Button,
  Icon,
  Segment,
  Header,
  Card,
  Menu
} from "semantic-ui-react";
import IIncident from "../interfaces/IIncident";
import IncidentCard from "./IncidentCard";
import InputForm from "./InputForm";
import FocusedIncident from "./FocusedIncident";

interface IProps {
  incidentsData: any[];
  selectedIncident: String;
  handleIncidentSelect: (event: SyntheticEvent, data: object) => void;
  updateIncidents: (data: any) => void;
}

const SidePane: React.FC<IProps> = ({
  incidentsData,
  selectedIncident,
  handleIncidentSelect,
  updateIncidents
}) => {
  const renderSelectedIncident = () => {
    const data =
      incidentsData.filter(incident => incident.id === selectedIncident)[0]
    return (
      <FocusedIncident
        incident={data}
        handleIncidentSelect={handleIncidentSelect}
      />
    );
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
          flex: 1,
          paddingTop: 5,
          paddingLeft: 20,
          paddingRight: 20,
          margin: 0,
          backgroundColor: ""
        }}
      >
        <Header textAlign="center" style={{ marginTop: 20, marginBottom: 5, flex: 1 }} as="h2">
          <Icon name="exclamation triangle" color="green" />
          <Header.Content>SwampAware</Header.Content>
        </Header>

        {renderSelectedIncident()}
      </Container>

      <Container
        style={{
          paddingTop: 5,
          paddingLeft: 20,
          paddingRight: 20,
          margin: 0,
          flex: 10,
          overflowY: "scroll",
          backgroundColor: "#faf9f8"
        }}
      >
        <ItemGroup divided>
          {incidentsData.map(incident => (
            <IncidentCard
              incident={incident}
              handleIncidentSelect={handleIncidentSelect}
            />
          ))}
        </ItemGroup>
      </Container>
      <Segment
        style={{ flex: 1, margin: 0, borderRadius: 0 }}
        inverted
        textAlign="center"
      >
        <InputForm updateIncidents={updateIncidents} />
      </Segment>
    </div>
  );
};

export default SidePane;
