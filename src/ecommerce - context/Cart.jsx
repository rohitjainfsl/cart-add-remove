/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { ecomContext } from "./Main";
import CartItem from "./CartItem";

function Cart() {
  const { cart } = useContext(ecomContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    function getCartTotal() {
      let total = 0;
      cart.forEach((item) => {
        total += item.price;
      });
      setTotal(total);
    }
    getCartTotal();
  }, []);

  return (
    <div className="cart d-flex">
      <div className="cart-items-div">
        {cart.map((cartItem, index) => {
          return <CartItem key={index} index={index} cartItem={cartItem} />;
        })}
      </div>
      <div className="cart-total-div">
        <h3>TOTAL</h3>
        <ul className="prices">
          <li>
            <span>Item Total: </span> <span>{total}</span>
          </li>
          <li>
            <span>GST: </span> <span>0.00</span>
          </li>
        </ul>
        <p>
          <strong>GRAND TOTAL: </strong>
          <span>{total}</span>
        </p>
      </div>
    </div>
  );
}

export default Cart;
