/* eslint-disable react/prop-types */
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useContext } from "react";
import { ecomContext } from "./Main";
import { Link } from "react-router-dom";

function CartItem({ index, cartItem }) {
  const { handleRemoveFromCart } = useContext(ecomContext);
  return (
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
        <div className="quantityVariation">
          <button>+</button>
          <input type="text" readOnly value="1" />
          <button>-</button>
        </div>
        <Link
          className="btn btn-secondary mt-1 d-inline-block"
          to=""
          onClick={(e) => handleRemoveFromCart(e, cartItem)}
        >
          Remove From Cart
        </Link>
      </div>
    </div>
  );
}

export default CartItem;
