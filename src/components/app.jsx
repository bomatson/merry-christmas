import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Box from './box.jsx';

class App extends React.Component {
  state = {
    step: 1
  }

  transition = (e) => {
    let step = this.state.step;
    step += 1;

    this.setState({step});
  }

  render() {
    return (
      <div className='container'>
        <ReactCSSTransitionGroup transitionName="booga" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          <Box 
            key={this.state.step}
            step={this.state.step}
            transition={this.transition}
          />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
