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
      return (
        <Message transition={this.moveOn}>
          <h1>To the love of my life,</h1>
          <p>Merry Christmas!! This year, I decided to make this silly web app instead of wrapping a present.</p>
          <p>Turns out wrapping a present is WAYYYY easier </p>
          <h2>Click anywhere in this box to continue the unwrapping!</h2>
        </Message>
      );
    case 3:
      return (
        <Message transition={this.moveOn}>
          <h1>You know how we've been talking a lot about traveling?</h1>
          <h2>Places like...</h2>
        </Message>
      );
    case 4:
      return (
        <Message transition={this.moveOn}>
          <h1>New Orleans!</h1>
          <div className='travel new-orleans'></div>
          <h2>and...</h2>
        </Message>
      );
    case 5:
      return (
        <Message transition={this.moveOn}>
          <h1>Chicago!</h1>
          <div className='travel chicago'></div>
          <h2>and...</h2>
        </Message>
      );
    case 6:
      return (
        <Message transition={this.moveOn}>
          <h1>Southern France!</h1>
          <div className='travel france'></div>
          <h2>and...</h2>
        </Message>
      );
    case 7:
      return (
        <Message transition={this.moveOn}>
          <h1>Barcelona!</h1>
          <div className='travel spain'></div>
          <h2>and so many more!</h2>
        </Message>
      );
    case 8:
      return (
        <Message transition={this.moveOn}>
          <h1>Another thing</h1>
          <p>We've talked plenty about how silly shopping sprees are:</p>
          <div className='travel spree'></div>
          <h3>It got me thinking...</h3>
        </Message>
      );
    case 9:
      return (
        <Message transition={this.moveOn}>
          <h1>Let's do the math...</h1>
          <div className='travel francy'></div>
          +
          <div className='travel spreey'></div>
          =
        </Message>
      );
    case 10:
      return (
        <Message transition={this.moveOn}>
          <h1 className='special'>$1000 travel spree!!!!</h1>
          <h2>To any place, anytime, anywhere in the world!. This offer does not expire :)</h2>
          <p>One more thing...</p>
        </Message>
      );
    case 11:
      return (
        <Message transition={this.moveOn}>
          <h1 className='special'>I LOVE YOU SO MUCH</h1>
          <h2>Merry Christmas babe :)</h2>
        </Message>
      );
    default:
      return <div className='message'> fin. </div>;
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
