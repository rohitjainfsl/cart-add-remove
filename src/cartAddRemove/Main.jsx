import { useEffect, useState } from "react";
import Products from "./Products";
import Cart from "./Cart";
import "./cartAddRemove.css";

document.title = "Cart Add Remove Products";

const products = [
  { id: 1, name: "Icecream", price: 100 },
  { id: 2, name: "Gucci Bag", price: 200 },
  { id: 3, name: "Allen Solly Jeans", price: 300 },
  { id: 4, name: "Starbucks Coffee", price: 500 },
];

function Main() {
  const [items, setItems] = useState(products);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    items.map((it) => {
      it.quantity = 0;
    });
  }, []);


  return (
    <>
      <main>
        <Products
          items={items}
          setItems={setItems}
          cart={cart}
          setCart={setCart}
        />
        <Cart cart={cart} setCart={setCart} />
      </main>
    </>
  );
}

export default Main;
