import styles from "./card.module.css"

const ProductList = ({ products, addProductToCart }) => {
  return (
    <div>
      <h1>Tienda en línea</h1>
      <h2>Lista de productos:</h2>

      <div className={styles.container}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <h3>{product.title}</h3>
            <img src={product.images} alt={product.title} className={styles.image}/>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => addProductToCart(product)} className={styles.button}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
