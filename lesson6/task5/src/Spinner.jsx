import React from 'react';

const Spinner = ({ size }) => {
  let style = { with: size, height: size };
  return <span className="spinner" style={style}></span>;
};
export default Spinner;
