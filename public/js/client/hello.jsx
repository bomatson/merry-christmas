var React = require('react');
var ReactDOM = require('react-dom');

var HelloMessage = React.createClass({
  render: function() {
    return <div className='boo'>Hi Mr {this.props.name}</div>;
  }
});

ReactDOM.render(
    <HelloMessage name="Bobby" />,
      document.getElementById('target')
);

export default HelloMessage
