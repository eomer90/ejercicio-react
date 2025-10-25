import { useEffect, useState } from "react";
import ProductList from "./Products/products";
import NumberOfItems from "./Products/cart";
import CartWindow from "./Products/cartWindow";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addProductToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        const first9 = data.slice(0, 9);
        setProducts(first9);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <NumberOfItems cart={cart} />
      <CartWindow cart={cart} />
      <ProductList products={products} addProductToCart={addProductToCart} />
    </>
  );
}

export default App;
