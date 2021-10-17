import React from 'react';
import PropTypes from 'prop-types';

const Dialog = ({ onClose, isOpen, children, title }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="dialog">
      <div className="dialog__heading">
        <div className="dialog__title">{title}</div>
        <button className="dialog__close-btn" onClick={onClose}>
          +
        </button>
      </div>
      <div className="dialog_content">{children}</div>
    </div>
  );
};

Dialog.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

Dialog.defaultProps = {
  isOpen: false,
  title: '',
};

export default Dialog;
