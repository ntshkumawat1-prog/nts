
// import {Link} from "react-router-dom"
// import "../Style/styling.css"

// const Navbar = ({ filterItem, len }) => {
//   return (
//     <div className="nav-section">
//       <h1 className="store">All-In-One</h1>
//       <h1 className="store1">Store</h1>
//       <label>Search</label>
//       <input type="Search" placeholder="Search here" />
    
//       <Link to="/" className="homes"  onClick={() => filterItem("Home")}>Home</Link>
//       <Link to="/Book" className="books" onClick={() => filterItem("book")}>Book</Link>
//       <Link to="/Mobile" className="mobiles" onClick={() => filterItem("mobile")}>Mobile</Link>
//       <Link to="/Cart" className="carts">Cart({len})</Link>
//       <button className="btn">Sign up</button>
      
//     </div>
//   )
// }

// export default Navbar


import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({ filterItem, len }) => {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4 fixed-top">

      {/* Logo */}
      <Link
        to="/"
        className="navbar-brand fw-bold fs-3 text-warning"
      >
        NITESH 
      </Link>

      {/* Toggle Button for Mobile */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Links */}
      <div
        className="collapse navbar-collapse"
        id="navbarNav"
      >

        {/* Search Bar */}
        <form className="d-flex mx-auto w-50">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search here"
          />
        </form>

        {/* Navigation Links */}
        <ul className="navbar-nav ms-auto align-items-center gap-3">

          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              onClick={() => filterItem("Home")}
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/Book"
              className="nav-link"
              onClick={() => filterItem("book")}
            >
              Book
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/Mobile"
              className="nav-link"
              onClick={() => filterItem("mobile")}
            >
              Mobile
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/Cart"
              className="nav-link position-relative"
            >
              Cart
              <span className="badge bg-danger ms-1">
                {len}
              </span>
            </Link>
          </li>

          {/* Signup Button */}
          <li className="nav-item">
            <button className="btn btn-warning fw-bold">
              Sign Up
            </button>
          </li>

        </ul>

      </div>

    </nav>
  );
};

export default Navbar;
