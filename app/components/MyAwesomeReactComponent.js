import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import createReactClass from 'create-react-class';

class MyAwesomeReactComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    label: 'VASS'
  }

  handleTouchTap() {
    alert('123');
  }

  render() {
    return (<RaisedButton label={this.props.label} onTouchTap={this.handleTouchTap}/>);
  }
}

export default MyAwesomeReactComponent;
