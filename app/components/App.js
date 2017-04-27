import React from 'react';

import AppBar from 'material-ui/AppBar';
import createReactClass from 'create-react-class';
import MyAwesomeComponent from './MyAwesomeReactComponent';

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

function AllNamesList(props) {
  const names = props.names;
  const listNames = names.map((name) => <li key={name.toString()}>{name}</li>);
  return (
    <ul>{listNames}</ul>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  myNames = ['allo', 'yoba', 'etoti'];

  render() {
    return (
      <div>
        <AppBar title='Hello React!'/>
        <AllNamesList names={this.myNames}/>
        <MyAwesomeComponent label='Vasiliy'/>
      </div>
    );
  }
}

export default App;
