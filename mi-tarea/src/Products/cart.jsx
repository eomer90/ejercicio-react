import styles from "./card.module.css";
import { FaShoppingCart } from "react-icons/fa";

const NumberOfItems = ({ cart }) => {
  return (
    <div className={styles.cart}>
      <FaShoppingCart/>
      <p>Cart: {cart.length} items</p>
    </div>
  );
};

export default NumberOfItems;
