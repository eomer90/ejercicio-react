import { useEffect, useState } from 'react';
import ProductList from './Products/products';
import CartWindow from './Products/cartWindow';
import './App.css';

function App() {
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => {
        const first9 = data.slice(0, 9);
        setProducts(first9);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addProductToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const groupedCart = cart.reduce((acc, product) => {
    const existing = acc.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      acc.push({ ...product, quantity: 1 });
    }
    return acc;
  }, []);

  const total = groupedCart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  const totalItems = groupedCart.reduce((acc, product) => acc + product.quantity, 0);

  const increaseQuantity = (productId) => {
    setCart((prevCart) => [...prevCart, prevCart.find((p) => p.id === productId)]);
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((p) => p.id === productId);
      if (index !== -1) {
        const newCart = [...prevCart];
        newCart.splice(index, 1);
        return newCart;
      }
      return prevCart;
    });
  };

  const removeProduct = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <>
      <CartWindow
        totalItems={totalItems}
        cart={groupedCart}
        total={total}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeProduct={removeProduct}
      />
      <ProductList products={products} addProductToCart={addProductToCart} />
    </>
  );
}

export default App;
