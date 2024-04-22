/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Link } from "react-router-dom";

function Home(props) {
  const [products, setProducts] = useState([]);

  // useEffect - runs a code maximum once

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setProducts(result);
      });
  }, []);
  console.log(props.cart);

  return (
    <div className="products">
      {products.map((product, index) => {
        return (
          <div className="product" key={index}>
            <Link to={`/singleProduct/${product.id}`}>
              <img src={product.image} alt="Product Image" />
            </Link>
            <h3>
              <Link to={`/singleProduct/${product.id}`}>{props.summarize(product.title)}</Link>
            </h3>
            <p className="d-flex justify-center">
              <CurrencyRupeeIcon /> {product.price}
            </p>

            {props.isProductAddedInCart(product) ? (
              <Link
                className="btn btn-secondary"
                to=""
                onClick={(e) => props.handleRemoveFromCart(e, product)}
              >
                Remove From Cart
              </Link>
            ) : (
              <Link
                className="btn btn-primary"
                to=""
                onClick={(e) => props.handleAddToCart(e, product)}
              >
                Add To Cart
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Home;
