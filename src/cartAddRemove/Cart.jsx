/* eslint-disable react/prop-types */
import React from "react";
import CartItem from "./CartItem";

function Cart({ cart, setCart }) {
  return (
    <div className="cartDiv">
      {cart.map((cartItem, index) => {
        return <CartItem key={index} cartItem={cartItem} />;
      })}
    </div>
  );
}

export default Cart;
