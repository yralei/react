import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './search.scss';
import Search from './search.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Search name="Tom" age={17} />, rootElement);
