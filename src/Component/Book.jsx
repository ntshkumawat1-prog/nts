import Products from "./ProductApi";

const Book = ({ addTocart }) => {

  // Sirf Book category filter
  const bookItems = Products.filter(
    (item) => item.category === "book"
  );

  return (
    <div className="outer-card">

      {bookItems.map((item) => (
        <div className="card" key={item.id}>

          <img
            src={item.image}
            alt={item.title}
            width="200"
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

export default Book;
