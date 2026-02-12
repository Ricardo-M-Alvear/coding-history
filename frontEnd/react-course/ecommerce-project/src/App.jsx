import { Routes, Route } from "react-router";
import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { TrackingPage } from "./pages/TrackingPage";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function getCartData() {
      const res = await axios.get("/api/cart-items?expand=product");
      setCart(res.data);
    }
    getCartData();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking/:orderId/:productId" element={<TrackingPage cart={cart} />}/>
    </Routes>
  );
}

export default App;
