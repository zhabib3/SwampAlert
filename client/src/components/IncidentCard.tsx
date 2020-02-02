import React from "react";
import { Item, Label } from "semantic-ui-react";
import IInterface from "../interfaces/IIncident";

interface IProps {
  incident: any;
}

const IncidentCard: React.FC<IProps> = ({ incident }) => {
  return (
    <Item>
      <Item.Image src="/assets/placeholder.png" />

      <Item.Content>
        <Item.Header as="a">{incident.narrative}</Item.Header>
        <Item.Meta>
          <span>{incident.address}</span>
        </Item.Meta>
        { incident.description && <Item.Description>{incident.description}</Item.Description>}
        <Item.Extra>
          <Label icon="calendar alternate">{incident.offense_date}</Label>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default IncidentCard;
