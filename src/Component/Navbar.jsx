
import {Link} from "react-router-dom"
import "../Style/styling.css"

const Navbar = ({ filterItem, len }) => {
  return (
    <div className="nav-section">
      <h1 className="store">All-In-One</h1>
      <h1 className="store1">Store</h1>
      <label>Search</label>
      <input type="Search" placeholder="Search here" />
    
      <Link to="/" className="homes"  onClick={() => filterItem("Home")}>Home</Link>
      <Link to="/Book" className="books" onClick={() => filterItem("book")}>Book</Link>
      <Link to="/Mobile" className="mobiles" onClick={() => filterItem("mobile")}>Mobile</Link>
      <Link to="/Cart" className="carts">Cart({len})</Link>
      <button className="btn">Sign up</button>
      
    </div>
  )
}

export default Navbar

