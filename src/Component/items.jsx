
import "../Style/styling.css"

const Item = ({ store }) => {
  return (
    <div className="card">
      <div className="img-section">
      <img src={store.image} alt={store.name} className="card-img" />
      
      <div className="card-body">
        <h2>{store.title}</h2>
        <p className="category">{store.category}</p>
        <p className="description">{store.description}</p>
        
        <div className="card-footer">
          <span className="price">₹{store.price}</span>
          <button className="btn">Add To Cart</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Item

