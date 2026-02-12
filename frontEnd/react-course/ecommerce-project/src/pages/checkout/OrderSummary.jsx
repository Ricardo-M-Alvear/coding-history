import dayjs from "dayjs";
import {DeliveryOptions} from "./DeliveryOptions";
import CartItemDetails from "./CartItemDetails";
import DeliveryDate from "./DeliveryDate";

export const OrderSummary = ({cart, deliveryOptions}) => {
  return (
    <div>
      <div className="order-summary">
        {deliveryOptions.length > 0 &&
          cart.map((cartItem) => {
            const selectedDeliveryOption = deliveryOptions.find(
              (deliveryOption) => {
                return deliveryOption.id === cartItem.deliveryOption.id;
              },
            );
            return (
              <div key={cartItem.product.id} className="cart-item-container">
                <DeliveryDate selectedDeliveryOption={selectedDeliveryOption} />

                <div className="cart-item-details-grid">
                  <CartItemDetails cartItem={cartItem} />

                  <DeliveryOptions
                    deliveryOptions={deliveryOptions}
                    cartItem={cartItem}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OrderSummary;
