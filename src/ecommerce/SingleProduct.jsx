/* eslint-disable react/prop-types */
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

function SingleProduct(props) {
  const { id } = useParams();
  const [single, setSingle] = useState({});

  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.json())
    .then((result) => {
      // console.log(result);
      setSingle(result);
    });

  return (
    <div className="container">
      <div className="single singleProduct d-flex">
        <div className="left">
          <img src={single.image} alt="" />
        </div>
        <div className="right">
          <h3>{single.title}</h3>
          <p>{single.description}</p>
          <p className="d-flex"> <CurrencyRupeeIcon /> {single.price}</p>
          {props.isProductAddedInCart(single) ? (
            <Link className="btn btn-secondary mt-1 d-inline-block" to="" onClick={(e) => props.handleRemoveFromCart(e, single)}>
              Remove From Cart
            </Link>
          ) : (
            <Link className="btn btn-primary mt-1 d-inline-block" to="" onClick={(e) => props.handleAddToCart(e, single)}>
              Add To Cart
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
