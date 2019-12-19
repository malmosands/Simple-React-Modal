import React, { useState, useRef } from 'react';
import useOutsideClick from "../utils/useOutsideClick";

const Modal = (props) => {
  const { key, children, setIsOpen, width } = props;

  // Adding overflow:hidden to BODY to prevent scrolling
  const body = document.body;
  body.classList.add("overflow-hidden");
  const ref = useRef();

  // Close Modal
  const closeModal = () => {
    body.classList.remove("overflow-hidden");
    setIsOpen(false);
  }

  // Closing Modal when clicking on the backdrop
  useOutsideClick(ref, () => {
    body.classList.remove("overflow-hidden");
    setIsOpen(false);
  });

  return (
    <div key={key} className="modal">
      <div ref={ref} className="modal-body" style={{width: width}}>
        {children}
      </div>
    </div>
  )
};

export default Modal;
