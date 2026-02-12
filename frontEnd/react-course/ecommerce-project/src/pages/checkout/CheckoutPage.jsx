import axios from "axios";
import { useState, useEffect } from "react";
import "./checkout-header.css";
import "./CheckoutPage.css";
import OrderSummary from "./OrderSummary";
import PaymentSummary from "./PaymentSummary";
import CheckoutHeader from "./CheckoutHeader";

export function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    async function getDeliveryOption() {
      let res = await axios.get("/api/delivery-option?expand=estimatedDeliveryTime");
      setDeliveryOptions(res.data);
      res = await axios.get("/api/payment-summary");
      setPaymentSummary(res.data);
    }
    getDeliveryOption();
  }, []);

  return (
    <>
      <title>Checkout</title>
     <CheckoutHeader cart={cart} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />

          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
}
