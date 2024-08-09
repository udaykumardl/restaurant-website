// import React, { useContext } from 'react';
// import './Modal.css';
// import ShoeContext from '../../Store/ShoeContext';

// const Modal = ({
//   type,
//   show,
//   onClose,
//   shoe,
//   selectedSize,
//   onSelectSize,
//   onAddToCart,
//   itemIndex,
// }) => {
//   const { dispatch } = useContext(ShoeContext);

//   if (!show || !shoe) {
//     return null;
//   }

//   const handleSizeSelect = (event) => {
//     onSelectSize(event.target.value);
//   };

//   const removeFromCart = () => {
//     dispatch({ type: 'REMOVE_FROM_CART', payload: itemIndex });
//     onClose();
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>&times;</span>
//         <h3>{shoe.name}</h3>
//         <p>{shoe.description}</p>
//         <p>Price: {shoe.price}</p>
//         {type === 'addToCart' ? (
//           <>
//             <select value={selectedSize} onChange={handleSizeSelect}>
//               <option value="">Select Size</option>
//               {shoe.sizes.map((size, index) => (
//                 <option key={index} value={size}>
//                   {size} ({shoe.quantity[index]} available)
//                 </option>
//               ))}
//             </select>
//             <button onClick={onAddToCart}>Add to Cart</button>
//           </>
//         ) : (
//           <button onClick={removeFromCart}>Delete from Cart</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Modal;


import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.module.css';

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return ReactDOM.createPortal(
    <>
      <Backdrop onClose={props.onClose} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </>,
    document.getElementById('overlays')
  );
};

export default Modal;

