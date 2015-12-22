import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main.jsx';

export default function run() {
  ReactDOM.render(
      <Main name="Bobby" />,
        document.getElementById('target')
  );
}
