
import "../Style/styling.css"
const Cart = ({ cart, iQty, decreaseQty, removeItem }) => {

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty, 0
  );

  console.log(cart);

  return (
    <div className="cart-container">

      <h2 className="cart-heading">
        Cart
      </h2>

      {cart.length === 0 && (
        <p className="empty-cart">
          Cart is empty
        </p>
      )}

      {cart.map((item) => {
        return (
          <div className="cart-card" key={item.id}>

            <div className="imgbar">
              <img src={item.image} alt="" />
            </div>

            <p className="cart-title">
              {item.title}
            </p>

          <p className="cart-des">
            {item. description}
          </p>

            <p className="cart-price">
              ₹{item.price}
            </p>

            <div className="qty-section">

              <button
                className="qty-btn"
                onClick={() => decreaseQty(item)}
              >
                -
              </button>

              <span className="qty-number">
                {item.qty}
              </span>

              <button
                className="qty-btn"
                onClick={() => iQty(item)}
              >
                +
              </button>

            </div>

            <button
              className="remove-btn"
              onClick={() => removeItem(item)}
            >
              Remove
            </button>

            <p className="subtotal">
              Subtotal: ₹{item.price * item.qty}
            </p>

            <hr className="line" />

          </div>
        );
      })}

      <h3 className="total-price">
        Total Price: ₹{totalPrice}
      </h3>

    </div>
  );
};

export default Cart;
