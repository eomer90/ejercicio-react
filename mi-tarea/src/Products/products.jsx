import styles from "./card.module.css"
import { toast, ToastContainer } from "react-toastify";


const ProductList = ({ products, addProductToCart }) => {
  const handleAddToCart = (product) => {
    addProductToCart(product);
    toast.success(`${product.title} has been added to the cart`, {
      position: "top-right",
      autoClose: 2000
    });
  };

  return (
    <div>
      <h1>Tienda en línea</h1>
      <h2>Lista de productos:</h2>

      <ToastContainer />

      <div className={styles.container}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <h3>{product.title}</h3>
            <img src={product.images} alt={product.title} className={styles.image}/>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}
              className={styles.button}>Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
