import React, { SyntheticEvent } from "react";
import { Item, Label, Button } from "semantic-ui-react";
import IInterface from "../interfaces/IIncident";

interface IProps {
  incident: IInterface;
  handleIncidentSelect: (event: SyntheticEvent, data: object) => void;
}

const IncidentCard: React.FC<IProps> = ({ incident, handleIncidentSelect }) => {
  return (
    <Item>
      <Item.Image src="/assets/placeholder.png" />

      <Item.Content>
        <Button value={incident.id} onClick={handleIncidentSelect} as="a">{incident.title}</Button>
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
