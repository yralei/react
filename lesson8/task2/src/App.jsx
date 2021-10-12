import React from 'react';
import Clock from './Clock.jsx';

const App = () => {
  return (
    <>
      <Clock location={'London'} offset={0} />
      <Clock location={'Kyiv'} offset={-5} />
      <Clock location={'New York'} offset={2} />
    </>
  );
};
export default App;
