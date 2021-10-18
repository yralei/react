import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const users = [
  { name: 'Tom', age: 18, id: 1 },
  { name: 'Bob', age: 28, id: 2 },
  { name: 'Sam', age: 38, id: 3 },
  { name: 'John', age: 48, id: 4 },
];

const rootElement = document.querySelector('#root');

ReactDOM.render(<UsersList users={users} />, rootElement);
