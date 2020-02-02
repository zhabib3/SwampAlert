import React, { SyntheticEvent } from "react";
import { Item, Label, Button, Menu } from "semantic-ui-react";

interface IProps {
  incident: any;
  handleIncidentSelect: (event: SyntheticEvent, data: object) => void;
}

const IncidentCard: React.FC<IProps> = ({ incident, handleIncidentSelect }) => {
  return (
    <Item>
      <Item.Image src="/assets/placeholder.png" />

      <Item.Content>
        <Menu.Item 
          name={incident.narrative}
          value={incident.id}
          style={{
            fontSize: 18,
            fontWeight: "bold"
          }}
          onClick={handleIncidentSelect}
        />
        <Item.Meta>
          <span>{incident.address}</span>
        </Item.Meta>
        { incident.description && <Item.Description>{incident.description}</Item.Description>}
        <Item.Extra>
          <Label icon="calendar">{incident.offense_date}</Label>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default IncidentCard;
