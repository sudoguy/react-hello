import React from 'react';
import {List, ListItem} from 'material-ui/List';

export default function ListNames(props) {
  const names = props.name;
  const listNames = names.map((name) => <ListItem primaryText={name} key={name} />);
  return (
    <List style={{width: '100px'}}>
      {listNames}
    </List>);
}
