import React, { SyntheticEvent } from "react";
import {
  Item,
  Label,
  Button,
  Menu,
  Card,
  Icon,
  Image,
  ItemGroup
} from "semantic-ui-react";

interface IProps {
  incident: any;
  handleIncidentSelect: (event: SyntheticEvent, data: object) => void;
}

const FocusedIncident: React.FC<IProps> = ({
  incident,
  handleIncidentSelect
}) => {
  if (incident == undefined) {
    return <p>Loading</p>
  }
  return (
    <ItemGroup>
      <Item fluid style={{
        marginTop:5,
        marginBottom: 20,
        padding: 15,
        color: "white",
        // backgroundColor: "#0078d4",
        backgroundColor: "#9399ff",
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
      }}>
        <Item.Image src="/assets/placeholder.png" />

        <Item.Content>
          <Menu.Item
            name={incident.narrative}
            value={incident.id}
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "white",
            }}
            onClick={handleIncidentSelect}
          />
          <Item.Meta style={{color:"white"}}>
            <span>{incident.address}</span>
          </Item.Meta>
          {incident.description && (
            <Item.Description style={{color:"white"}}>{incident.description}</Item.Description>
          )}
          <Item.Extra style={{color:"white"}}>
            <Label icon="calendar">{incident.offense_date}</Label>
          </Item.Extra>
        </Item.Content>
      </Item>
    </ItemGroup>
  );
};

export default FocusedIncident;
