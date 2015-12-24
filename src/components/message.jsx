import React from 'react';

class Message extends React.Component {
  render() {
    return <div onClick={this.transition}> Here </div>;
  }

  transition = (e) => {
    this.props.transition();
  }
}

export default Message
