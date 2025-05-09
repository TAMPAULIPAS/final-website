"use client";

import { useState } from "react";
import styles from "./AddToCart.module.css";

function AddToCart({ product }) {
  const [added, setAdded] = useState(false);

  const handleAddCart = () => {
    const stored = JSON.parse(localStorage.getItem("products")) || [];
    const index = stored.findIndex((item) => item.product.id === product.id);

    if (index > -1) {
      stored[index].count++;
    } else {
      stored.push({ product, count: 1 });
    }

    localStorage.setItem("products", JSON.stringify(stored));

    setAdded(true);
    setTimeout(() => setAdded(false), 2000); // შეტყობინება 2 წამით
  };

  return (
    <button
      className={`${styles.button} ${added ? styles.added : ""}`}
      onClick={handleAddCart}
    >
      {added ? "✔️ დამატებულია" : "🛒 კალათაში დამატება"}
    </button>
  );
}

export default AddToCart;
