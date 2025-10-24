import { useEffect, useState } from "react";

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
        <h1>Lista de productos:</h1>
        <ul>
            {
            products.map((product) => (
                <li key={product.id}>{product.title}<img src={product.images[0]}/>
                <p>Description: {product.description}</p>
                <p>Price: {product.price}</p>
                <button>Add to cart</button>
                </li>
             ))   
            }
        </ul>
    </div>
  )
}

export default ProductList;
