import "./HomePage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../../components/Header.jsx";
import { ProductsGrid } from "./ProductsGrid.jsx";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const res = await axios.get("/api/products");
      setProducts(res.data)
    };
    getHomeData();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
