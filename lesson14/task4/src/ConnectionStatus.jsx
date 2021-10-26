// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [connectionStatus, setConnectionStatus] = useState({
    status: 'online',
  });

  useEffect(() => {
    const isOnline = () => {
      setConnectionStatus({
        status: 'online',
      });
    };
    const isOffline = () => {
      setConnectionStatus({
        status: 'offline',
      });
    };
    window.addEventListener('online', isOnline);
    window.addEventListener('offline', isOffline);

    return () => {
      window.removeEventListener('online', isOnline);
      window.removeEventListener('offline', isOffline);
    };
  }, []);

  const { status } = connectionStatus;
  return <div className={`status ${status === 'offline' ? 'status_offline' : ''}`}>{status}</div>;
};

export default ConnectionStatus;
