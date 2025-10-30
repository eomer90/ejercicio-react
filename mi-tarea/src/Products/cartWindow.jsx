import { useState } from "react";
import { FaShoppingCart, FaFrown } from "react-icons/fa";
import styles from "./card.module.css";

const CartWindow = ({ cart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCart = () => setIsOpen(!isOpen);

  const cartDrawerClass = `${styles.cartDrawer} ${isOpen ? styles.open : ""}`;

  const groupedCart = cart.reduce((acc, product) => {
    const existing = acc.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      acc.push({ ...product, quantity: 1 });
    }
    return acc;
  }, []);


  const total = groupedCart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );


  return (
    <>
      <button onClick={toggleCart} className={styles.button}>Go to Cart</button>

      <div className={cartDrawerClass}>
        <div className={styles.cartHeader}>
          <FaShoppingCart/><h3> Your cart</h3>
          <button onClick={toggleCart} className={styles.closeButton}>✖</button>
        </div>

      {groupedCart.length === 0 ? (
          <>
            <p>Your cart is empty.</p>
            <FaFrown />
          </>
        ) : (
          <ul className={styles.cartList}>
            {groupedCart.map((product) => (
              < >
                <p key={product.id}>{product.title}</p> 
                <div className={styles.quantityControl}>
                  <p className={styles.qtyBox}>{product.quantity}</p>
                </div>
                <p>Price: ${product.price}</p>
                <p>Subtotal: ${(product.price * product.quantity).toFixed(2)}</p>
                <img
                  src={product.images}
                  alt={product.title}
                  className={styles.image}
                />
              </>
            ))}
          </ul>
        )}
          <div className={styles.total}>
              <h4>Total: ${total.toFixed(2)}</h4>
              <button className={styles.button}>Checkout</button>
          </div>
      </div>    

      {isOpen && <div className={styles.overlay} onClick={toggleCart}></div>}
    </>
  );
};

export default CartWindow;
