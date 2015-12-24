import React from 'react';
import Box from './box.jsx';
import Message from './message.jsx';

class Container extends React.Component {
  component() {
    return <Box />;
  }

  render() {
    let component = this.component();

    return (
      <div onClick={this.openBox}>
        {component}
      </div>
    );
  }

  openBox = (e) => {
    this.props.transition();
  }
}

export default Container;
