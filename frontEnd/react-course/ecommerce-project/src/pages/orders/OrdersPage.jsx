import "./OrdersPage.css";
import axois from "axios";
import { useState, useEffect, Fragment } from "react";
import { Header } from "../../components/Header.jsx";
import OrderDetailsGrid from "./OrderDetailsGrid.jsx";
import OrderHeader from "./OrderHeader.jsx";


export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getOrders(){
       const res = await axois.get("/api/orders?expand=products");
       setOrders(res.data)
    }
    getOrders();
  }, []);

  return (
    <>
      <title>Orders</title>
      <Header cart={cart} />
      <div>
        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <img className="search-icon" src="images/icons/search-icon.png" />
          </button>
        </div>

        <div className="right-section">
          <a className="orders-link header-link" href="/orders">
            <span className="orders-text">Orders</span>
          </a>

          <a className="cart-link header-link" href="/checkout">
            <img className="cart-icon" src="images/icons/cart-icon.png" />
            <div className="cart-quantity">3</div>
            <div className="cart-text">Cart</div>
          </a>
        </div>
      </div>

      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        {orders.map((element) => {
          <div className="order-container">
            <OrderHeader element={element}/>

            <OrderDetailsGrid element={element}/>

          </div>;
        })}
      </div>
    </>
  );
}
