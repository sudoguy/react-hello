import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

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
