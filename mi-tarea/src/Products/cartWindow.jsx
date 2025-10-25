import { useState } from "react";
import { FaShoppingCart, FaFrown } from "react-icons/fa";
import styles from "./card.module.css";

const CartWindow = ({ cart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCart = () => setIsOpen(!isOpen);

  const cartDrawerClass = `${styles.cartDrawer} ${isOpen ? styles.open : ""}`;

  return (
    <>
      <button onClick={toggleCart} className={styles.button}>Go to Cart</button>

      <div className={cartDrawerClass}>
          <div className={styles.cartHeader}>
              <FaShoppingCart/><h3> Your cart</h3>
              <button onClick={toggleCart} className={styles.closeButton}>✖</button>
          </div>

          {cart.length === 0 ? (
            <>
              <p>Your cart is empty.</p>
              <FaFrown />
            </> 
            ) : (
            <ul className={styles.cartList}>
              {cart.map((product, index) => (
                <li key={index}>
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                  <img src={product.images} alt={product.title} className={styles.image}/>
                </li>
              ))}
            </ul>
          )}
      </div>    

      {isOpen && <div className={styles.overlay} onClick={toggleCart}></div>}
    </>
  );
};

export default CartWindow;
