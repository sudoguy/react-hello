import React from 'react';

import MyAwesomeComponent from './MyAwesomeReactComponent';
import Menu from './Menu';

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
        <Menu/>
        <AllNamesList names={this.myNames}/>
        <MyAwesomeComponent label='Vasiliy'/>
      </div>
    );
  }
}

export default App;
