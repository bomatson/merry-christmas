import React from 'react';
import classNames from 'classNames';

class Ribbon extends React.Component {
  render() {
    let vertical = this.props.vertical;
    let className = classNames('ribbon', { 'vertical': !!vertical });

    return (<div className={className}></div>);
  }
}

export default Ribbon
