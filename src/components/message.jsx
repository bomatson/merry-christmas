import React from 'react';

class Message extends React.Component {
  render() {
    return (
        <div className='message' onClick={this.transition}>
          { this.props.children }
        </div>
      );
  }

  transition = (e) => {
    this.props.transition();
  }
}

export default Message
