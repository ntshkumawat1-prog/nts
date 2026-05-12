
import { useState } from "react";
import "../Style/styling.css";

const Home = ({ Allitems, addTocart }) => {
  

  const [search, setSearch] = useState("");
  console.log(Allitems);
  console.log(search);

  const filteredItems = Allitems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="outer-card">

        {filteredItems.map((item) => (
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

    </div>
  );
};

export default Home;