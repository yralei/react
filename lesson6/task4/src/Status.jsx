import React, { Component } from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

const Status = ({ isOnline }) => (isOnline ? <Online /> : <Offline />);
export default Status;
