
// import { useState } from "react";
// import "../Style/styling.css";

// const Home = ({ Allitems, addTocart }) => {
  

//   const [search, setSearch] = useState("");
//   console.log(Allitems);
//   console.log(search);

//   const filteredItems = Allitems.filter((item) =>
//     item.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>

//       <input
//         type="text"
//         placeholder="Search products..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <div className="outer-card">

//         {filteredItems.map((item) => (
//           <div className="card" key={item.id}>

//             <img
//               src={item.image}
//               alt={item.title}
//               width="200"
//             />

//             <h3>{item.title}</h3>

//             <p>{item.description}</p>

//             <h4>₹{item.price}</h4>

//             <button onClick={() => addTocart(item)}>
//               Add To Cart
//             </button>

//           </div>
//         ))}

//       </div>

//     </div>
//   );
// };

// export default Home;

import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const Home = ({ Allitems, addTocart }) => {

  const [search, setSearch] = useState("");

  // Search Filter
  const filteredItems = Allitems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container my-4">

      {/* Search Bar */}
      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <input
            type="text"
            className="form-control form-control-lg shadow-sm"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Product Cards */}
      <div className="row g-4">

        {filteredItems.map((item) => (
          <div className="col-md-4" key={item.id}>

            <div className="card h-100 shadow-sm border-0">

              <img
                src={item.image}
                alt={item.title}
                className="card-img-top p-3"
                style={{
                  height: "250px",
                  objectFit: "contain"
                }}
              />

              <div className="card-body d-flex flex-column">

                <h5 className="card-title fw-bold">
                  {item.title}
                </h5>

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

export default Home;