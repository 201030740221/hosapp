import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router/umd/ReactRouter';
import List from './list/list-module';

ReactDOM.render(
  <Router>
    <Router path='/' component={List} />
  </Router>,
  document.getElementById('example')
);