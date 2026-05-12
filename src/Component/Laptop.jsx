import Products from "./ProductApi";

const Laptop = ({ addTocart }) => {

  // Sirf Laptop category products
  const laptopItems = Products.filter(
    (item) => item.category === "laptop"
  );

  return (
    <div className="outer-card">

      {laptopItems.map((item) => (
        <div className="card" key={item.id}>

          <img
            src={item.image}
            alt={item.title}
            width="200"
            // className={item.id === 8 ? "big-image" : "normal-image"}
          />

          <h3>{item.title}</h3>

          <p>{item.description}</p>

          <h4>₹{item.price}</h4>

          <button onClick={() => addTocart(item)}>
            Add To Cart
          </button>

        </div>
      ))}

    </div>
  );
};

export default Laptop;
