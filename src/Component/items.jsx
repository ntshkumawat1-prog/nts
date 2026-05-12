
// import "../Style/styling.css"

// const Item = ({ store }) => {
//   return (
//     <div className="card">
//       <div className="img-section">
//       <img src={store.image} alt={store.name} className="card-img" />
      
//       <div className="card-body">
//         <h2>{store.title}</h2>
//         <p className="category">{store.category}</p>
//         <p className="description">{store.description}</p>
        
//         <div className="card-footer">
//           <span className="price">₹{store.price}</span>
//           <button className="btn">Add To Cart</button>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Item


// import "bootstrap/dist/css/bootstrap.min.css";

const Item = ({ store }) => {
  return (
    <div className="col-md-4 mb-4">

      <div className="card h-100 shadow-sm border-0">

        {/* Product Image */}
        <div className="d-flex justify-content-center p-3">
          <img
            src={store.image}
            alt={store.title}
            className="img-fluid"
            style={{
              height: "220px",
              objectFit: "contain"
            }}
          />
        </div>

        {/* Card Body */}
        <div className="card-body d-flex flex-column">

          <h5 className="card-title fw-bold">
            {store.title}
          </h5>

          <p className="badge bg-primary w-25">
            {store.category}
          </p>

          <p className="card-text text-muted">
            {store.description}
          </p>

          {/* Footer */}
          <div className="mt-auto d-flex justify-content-between align-items-center">

            <h5 className="text-success fw-bold mb-0">
              ₹{store.price}
            </h5>

            <button className="btn btn-dark">
              Add To Cart
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Item;

