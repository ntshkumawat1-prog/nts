
// import "../Style/styling.css"
// const Cart = ({ cart, iQty, decreaseQty, removeItem }) => {

//   const totalPrice = cart.reduce(
//     (total, item) => total + item.price * item.qty, 0
//   );

//   console.log(cart);

//   return (
//     <div className="cart-container">

//       <h2 className="cart-heading">
//         Cart
//       </h2>

//       {cart.length === 0 && (
//         <p className="empty-cart">
//           Cart is empty
//         </p>
//       )}

//       {cart.map((item) => {
//         return (
//           <div className="cart-card" key={item.id}>

//             <div className="imgbar">
//               <img src={item.image} alt="" />
//             </div>

//             <p className="cart-title">
//               {item.title}
//             </p>

//           <p className="cart-des">
//             {item. description}
//           </p>

//             <p className="cart-price">
//               ₹{item.price}
//             </p>

//             <div className="qty-section">

//               <button
//                 className="qty-btn"
//                 onClick={() => decreaseQty(item)}
//               >
//                 -
//               </button>

//               <span className="qty-number">
//                 {item.qty}
//               </span>

//               <button
//                 className="qty-btn"
//                 onClick={() => iQty(item)}
//               >
//                 +
//               </button>

//             </div>

//             <button
//               className="remove-btn"
//               onClick={() => removeItem(item)}
//             >
//               Remove
//             </button>

//             <p className="subtotal">
//               Subtotal: ₹{item.price * item.qty}
//             </p>

//             <hr className="line" />

//           </div>
//         );
//       })}

//       <h3 className="total-price">
//         Total Price: ₹{totalPrice}
//       </h3>

//     </div>
//   );
// };

// export default Cart;

// import "bootstrap/dist/css/bootstrap.min.css";

const Cart = ({ cart, iQty, decreaseQty, removeItem }) => {

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="container my-5">

      <h2 className="text-center mb-4 fw-bold">
        Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <div className="alert alert-warning text-center">
          Cart is empty
        </div>
      ) : (
        <div className="row g-4">

          {cart.map((item) => (
            <div className="col-md-6" key={item.id}>

              <div className="card shadow-sm h-100">

                <div className="row g-0">

                  <div className="col-4 d-flex align-items-center justify-content-center p-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid rounded"
                      style={{
                        height: "150px",
                        objectFit: "contain"
                      }}
                    />
                  </div>

                  <div className="col-8">
                    <div className="card-body d-flex flex-column h-100">

                      <h5 className="card-title">
                        {item.title}
                      </h5>

                      <p className="card-text text-muted small">
                        {item.description}
                      </p>

                      <h6 className="text-success fw-bold">
                        ₹{item.price}
                      </h6>

                      {/* Quantity Section */}
                      <div className="d-flex align-items-center gap-2 my-3">

                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => decreaseQty(item)}
                        >
                          -
                        </button>

                        <span className="fw-bold">
                          {item.qty}
                        </span>

                        <button
                          className="btn btn-outline-success btn-sm"
                          onClick={() => iQty(item)}
                        >
                          +
                        </button>

                      </div>

                      {/* Remove Button */}
                      <button
                        className="btn btn-danger btn-sm w-50 mb-2"
                        onClick={() => removeItem(item)}
                      >
                        Remove
                      </button>

                      <p className="fw-bold mt-auto">
                        Subtotal: ₹{item.price * item.qty}
                      </p>

                    </div>
                  </div>

                </div>
              </div>

            </div>
          ))}

        </div>
      )}

      {/* Total Price */}
      {cart.length > 0 && (
        <div className="text-end mt-5">
          <h3 className="fw-bold text-primary">
            Total Price: ₹{totalPrice}
          </h3>
        </div>
      )}

    </div>
  );
};

export default Cart;
