import React from 'react';
import Bow from './bow.jsx';
import Ribbon from './ribbon.jsx';
import Message from './message.jsx';
import classNames from 'classNames';

class Box extends React.Component {
  state = {
    boxOpen: false
  }

  component() {
    switch (this.props.step) {
    case 1:
      return (
        <div className='box' onClick={this.moveOn}>
          <Bow />
          <Ribbon />
          <Ribbon vertical='true'/>
        </div>
      );
    case 2:
      return <div className='message' onClick={this.moveOn}> Here </div>;
    default:
      return <div className='message'> more </div>;
    }
  }

  render() {
    let component = this.component();

    return component;
  }

  moveOn = (e) => {
    this.props.transition();
  }
}

export default Box;
