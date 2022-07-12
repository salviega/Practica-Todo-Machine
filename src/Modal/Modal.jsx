import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';
import './Modal.css';

function Modal({ children }) {
  // ReactDom tiene este método para crear portales
  return ReactDOM.createPortal(<div className='ModalBackground'>{children}</div>, document.getElementById('modal'));
}

export { Modal };
