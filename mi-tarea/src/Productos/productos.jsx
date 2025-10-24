import { useEffect, useState } from "react";
import styles from "./card.module.css"

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((response) => response.json())
    .then((data) => {
      const primeros10 = data.slice(0, 10);
      setProducts(primeros10);
    })
    .catch((error) => console.error("Error fetching data:", error));
}, []);

return (
  <div>
    <h1>Tienda en línea</h1>
    <h2>Lista de productos:</h2>

    <div className={styles.container}>{products.map((product) => (
        <div key={product.id} className={styles.card}>
          <h3>{product.title}</h3>
          <img src={product.images} className={styles.image}/>
          <p>Description: {product.description}</p>
          <p>Price: ${product.price}</p>
          <button className={styles.button}>Add to cart</button>
        </div>
      ))}
    </div>
  </div>
);
}

export default ProductList;
