import "./OrdersPage.css";
import axois from "axios";
import { useState, useEffect, Fragment } from "react";
import { Header } from "../../components/Header.jsx";
import { formatMoney } from "../../utils/money.js";
import dayjs from 'dayjs'


export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axois.get("/api/orders?expand=products").then((res) => setOrders(res.data));
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
            <div className="order-header">
              <div className="order-header-left-section">
                <div className="order-date">
                  <div className="order-header-label">Order Placed:</div>
                  <div>
                  {dayjs(element.orderTimeMs).format('MMMM D')}
                    August 12
                    </div>
                </div>
                <div className="order-total">
                  <div className="order-header-label">Total:</div>
                  <div>{formatMoney(element.totalCostCents)}</div>
                </div>
              </div>

              <div className="order-header-right-section">
                <div className="order-header-label">Order ID:</div>
                <div>{element.id}</div>
              </div>
            </div>

            <div className="order-details-grid">
              {element.products.map((e) => {
                return (
                  <Fragment key={e.product.id}>
                    <div className="product-image-container">
                      <img src={e.product.image} />
                    </div>

                    <div className="product-details">
                      <div className="product-name">
                       {e.product.name}
                      </div>
                      <div className="product-delivery-date">
                        Arriving on: {dayjs(e.estimatedDeliveryTimeMs).format('MMMM D')}
                      </div>
                      <div className="product-quantity">Quantity: {e.quantity}</div>
                      <button className="buy-again-button button-primary">
                        <img
                          className="buy-again-icon"
                          src="images/icons/buy-again.png"
                        />
                        <span className="buy-again-message">Add to Cart</span>
                      </button>
                    </div>

                    <div className="product-actions">
                      <a href="/tracking">
                        <button className="track-package-button button-secondary">
                          Track package
                        </button>
                      </a>
                    </div>
                  </Fragment>
                );
              })}
           

              
            </div>
          </div>;
        })}
      </div>
    </>
  );
}
