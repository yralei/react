import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Counter from './Counter.jsx';
import App from './App.jsx';

const rootElement = document.querySelector('#root');

const element = <App />;
ReactDOM.render(element, rootElement);
