/* eslint-disable no-undef */
import "./ecommerce.css";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";
import Blog from "./Blog";
import SingleProduct from "./SingleProduct";
import SingleBlog from "./SingleBlog";
import BlogParent from "./BlogParent";
import { useState } from "react";

function Main() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(e, product) {
    e.preventDefault();
    setCart([...cart, product]);
  }

  function handleRemoveFromCart(e, product) {
    e.preventDefault();
    setCart(
      cart.filter((cartItem) => {
        return cartItem.id !== product.id;
      })
    );
  }

  function isProductAddedInCart(product) {
    let productFound = cart.find((cartItem) => {
      return cartItem.id === product.id;
    });
    if (productFound) return true;
    else return false;
  }

  function summarize(title) {
    return title.length > 50 ? title.slice(0, 50) + "..." : title;
  }

  return (
    <>
      <BrowserRouter>
        <Header cart={cart} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cart={cart}
                setCart={setCart}
                handleAddToCart={handleAddToCart}
                handleRemoveFromCart={handleRemoveFromCart}
                isProductAddedInCart={isProductAddedInCart}
                summarize={summarize}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogParent />}>
            <Route index element={<Blog />}></Route>
            <Route path=":id" element={<SingleBlog />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                setCart={setCart}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            }
          />
          <Route
            path="/singleproduct/:id"
            element={
              <SingleProduct
                cart={cart}
                setCart={setCart}
                handleAddToCart={handleAddToCart}
                handleRemoveFromCart={handleRemoveFromCart}
                isProductAddedInCart={isProductAddedInCart}
                summarize={summarize}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Main;
