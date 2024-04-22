/* eslint-disable react/prop-types */
import Product from "./Product";

function Products({ items, cart, setCart }) {

  function updateCart(product) {
    cart.length === 0
      ? setCart([...cart, product])
      : cart.find((cartItem) => {
          return cartItem.id === product.id;
        }) === undefined
      ? setCart([...cart, product])
      : "";
  }

  return (
    <div className="productsDiv">
      {items.map((item, index) => {
        return (
          <Product key={index} item={item} cart={cart} setCart={setCart} updateCart={updateCart} />
        );
      })}
    </div>
  );
}

export default Products;
