import React from "react";
import { Item, Label } from "semantic-ui-react";
import IInterface from "../interfaces/IIncident";

interface IProps {
  incident: IInterface;
}

const IncidentCard: React.FC<IProps> = ({ incident }) => {
  return (
    <Item>
      <Item.Image src="/assets/placeholder.png" />

      <Item.Content>
        <Item.Header as="a">{incident.title}</Item.Header>
        <Item.Meta>
          <span>{incident.address}</span>
        </Item.Meta>
        <Item.Description>{incident.description}</Item.Description>
        <Item.Extra>
          <Label icon="calendar alternate">{incident.timeAndDate}</Label>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default IncidentCard;
