/* eslint-disable react/prop-types */
import { useState } from "react";

function Product({ item, cart, setCart, updateCart }) {
  const [quantity, setQuantity] = useState("");

  

  console.log(cart);

  return (
    <div className="item">
      <p className="name">{item.name}</p>
      <p className="price">{item.price}</p>
      <div className="quantity">
        <button
          onClick={() => {
            setQuantity(Number(quantity) + 1);
            updateCart(item);
          }}
        >
          +
        </button>
        <p>{quantity.length === 0 ? 0 : quantity}</p>
        <button
          onClick={() => {
            setQuantity(Number(quantity) - 1);
            updateCart(item);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Product;
