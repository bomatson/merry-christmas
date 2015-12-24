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
    let step = this.state.step;
    return (
      <div className='container'>
        <ReactCSSTransitionGroup transitionName="booga" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          <Box 
            key={step}
            step={step}
            transition={this.transition}
          />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
