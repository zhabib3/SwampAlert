import React from 'react'
import { Item, ItemGroup, Label } from 'semantic-ui-react'

const SidePane: React.FC = () => {
  return (
    <div>
      <ItemGroup divided>
      <Item>
      <Item.Image src='/assets/placeholder.png' />

      <Item.Content>
        <Item.Header as='a'>12 Years a Slave</Item.Header>
        <Item.Meta>
          <span className='cinema'>Union Square 14</span>
        </Item.Meta>
        <Item.Description>Description blah blah blah</Item.Description>
        <Item.Extra>
          <Label>IMAX</Label>
          <Label icon='globe' content='Additional Languages' />
        </Item.Extra>
      </Item.Content>
    </Item>
      </ItemGroup>
    </div>
  );
}

export default SidePane;

