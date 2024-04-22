/* eslint-disable react/prop-types */
import React from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Link } from "react-router-dom";

function Cart(props) {
  return (
    <div className="cart">
      {props.cart.map((cartItem, index) => {
        return (
          <>
            <div
              key={index}
              className="cart-item d-flex justify-center align-center mb-2"
            >
              <div className="left">
                <img src={cartItem.image} alt="" />
              </div>
              <div className="right">
                <h3>{cartItem.title}</h3>
                <p>
                  <CurrencyRupeeIcon /> {cartItem.price}
                </p>
                <Link
                  className="btn btn-secondary mt-1 d-inline-block"
                  to=""
                  onClick={(e) => props.handleRemoveFromCart(e, cartItem)}
                >
                  Remove From Cart
                </Link>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Cart;
