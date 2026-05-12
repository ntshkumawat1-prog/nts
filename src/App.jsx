import React, { useState } from "react";
import Navbar from "./Component/Navbar.jsx";
import Cart from "./Component/Cart.jsx";
import Mobile from "./Component/Mobile.jsx";
import Book from "./Component/Book.jsx";
import Laptop from "./Component/Laptop.jsx";
import Home from "./Component/Home.jsx";

import { Routes, Route } from "react-router-dom";

import Products from "./Component/ProductApi.jsx";

const App = () => {

  // Products Show Karne Ke Liye
  const [items, setItems] = useState(Products);

  // Cart State
  const [cart, setCart] = useState([]);

  // =========================
  // Add To Cart Function
  // =========================
  const addTocart = (product) => {

    const exist = cart.find(
      (cartItem) => cartItem.id === product.id
    );

    if (exist) {

      const updatedCart = cart.map((cartItem) =>
        cartItem.id === product.id
          ? { ...cartItem, qty: cartItem.qty + 1 }
          : cartItem
      );

      setCart(updatedCart);

    } else {

      setCart([...cart, { ...product, qty: 1 }]);

    }
  };

  // =========================
  // Increase Qty
  // =========================
  const iQty = (item) => {

    const updatedCart = cart.map((x) =>
      x.id === item.id
        ? { ...x, qty: x.qty + 1 }
        : x
    );

    setCart(updatedCart);
  };

  // =========================
  // Decrease Qty
  // =========================
  const decreaseQty = (item) => {

    const updatedCart = cart.map((x) => {

      if (x.id === item.id) {
        return { ...x, qty: x.qty - 1 };
      }

      return x;
    });

    setCart(updatedCart.filter((x) => x.qty > 0));
  };


  
  // =========================
  // Remove Item
  // =========================
  const removeItem = (item) => {

    const updatedCart = cart.filter(
      (x) => x.id !== item.id
    );

    setCart(updatedCart);
  };

  // =========================
  // Filter Function
  // =========================
  const filterItem = (category) => {

    if (category === "all") {

      setItems(Products);

    } else {

      const updatedItems = Products.filter(
        (curElem) => curElem.category === category
      );

      setItems(updatedItems);
    }
  };

  return (
    <div>

      <Navbar filterItem={filterItem} len={cart.length} />

      <Routes>

        <Route
          path="/"
          element={
            <Home
              Allitems={items}
              addTocart={addTocart}
            />
          }
        />

        <Route
          path="/Book"
          element={<Book addTocart={addTocart} />}
        />

        <Route
          path="/Mobile"
          element={<Mobile addTocart={addTocart} />}
        />

        <Route
          path="/Laptop"
          element={<Laptop addTocart={addTocart} />}
        />

        <Route
          path="/Cart"
          element={
            <Cart
              cart={cart}
              iQty={iQty}
              decreaseQty={decreaseQty}
              removeItem={removeItem}
            />
          }
        />

      </Routes>

    </div>
  );
};

export default App;

