import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';

var names = ['evgeny', 'vasiliy', 'petuch'];

const ThemeApp = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <App name={names}/>
  </MuiThemeProvider>
);

ReactDOM.render(
  <ThemeApp/>, document.getElementById('app'));
