// import React from 'react';
// import ReactDOM from 'react-dom';


// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return ReactDOM.createPortal(
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <button className="modal-close" onClick={onClose}>X</button>
//         {children}
//       </div>
//     </div>,
//     document.getElementById('modal-root') // This should be in your HTML
//   );
// };

// export default Modal;



import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'; // Ensure this file contains the styles

const Modal = ({ isOpen, onClose, children }) => {
  const [showContent, setShowContent] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShowContent(true);
    } else {
      const timer = setTimeout(() => setShowContent(false), 300); // Duration of CSS transition
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!showContent && !isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className={`modal-content ${isOpen ? 'show' : 'hide'}`}>
        <button className="modal-close" onClick={onClose}>X</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') // Ensure this ID exists in your HTML
  );
};

export default Modal;

