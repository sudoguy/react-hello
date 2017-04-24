var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

var names = ['evgeny', 'vasiliy', 'petuch'];

ReactDOM.render(<App name={names} />, document.getElementById('app'));
