import { hot } from 'react-hot-loader/root';
import { setConfig } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

setConfig({ reloadHooks: false });

const Root = hot(App);

ReactDOM.render(
  <Root />,
  document.getElementById('root'),
);
