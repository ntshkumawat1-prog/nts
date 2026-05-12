// import Products from "./ProductApi";

// const Book = ({ addTocart }) => {

//   // Sirf Book category filter
//   const bookItems = Products.filter(
//     (item) => item.category === "book"
//   );

//   return (
//     <div className="outer-card">

//       {bookItems.map((item) => (
//         <div className="card" key={item.id}>

//           <img
//             src={item.image}
//             alt={item.title}
//             width="200"
//           />

//           <h3>{item.title}</h3>

//           <p>{item.description}</p>

//           <h4>₹{item.price}</h4>

//           <button onClick={() => addTocart(item)}>
//             Add To Cart
//           </button>

//         </div>
//       ))}

//     </div>
//   );
// };



// export default Book;
import Products from "./ProductApi";

const Book = ({ addTocart }) => {

  // Sirf Book category filter
  const bookItems = Products.filter(
    (item) => item.category === "book"
  );

  return (
    <div className="container mt-4">
      <div className="row g-4">

        {bookItems.map((item) => (
          <div className="col-md-4" key={item.id}>

            <div className="card h-100 shadow-sm">

              <img
                src={item.image}
                alt={item.title}
                className="card-img-top p-3"
                style={{ height: "250px", objectFit: "contain" }}
              />

              <div className="card-body d-flex flex-column">

                <h5 className="card-title">{item.title}</h5>

                <p className="card-text text-muted">
                  {item.description}
                </p>

                <h4 className="text-success mb-3">
                  ₹{item.price}
                </h4>

                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => addTocart(item)}
                >
                  Add To Cart
                </button>

              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Book;
