var React = require('react');

function AllNamesList (props) {
  const names = props.names;
  const listNames = names.map((name) =>
    <li key={name.toString()}>{name}</li>
  );
  return (
    <ul>{listNames}</ul>
  );
}

const myNames = ['allo', 'yoba', 'etoti'];

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Hello!</h1>
        <AllNamesList names={myNames} />
      </div>
    );
  }
});

module.exports = App;
