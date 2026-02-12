import React from "react";
import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";

export const OrderHeader = ({ element }) => {
  return (
    <div>
      <div className="order-header">
        <div className="order-header-left-section">
          <div className="order-date">
            <div className="order-header-label">Order Placed:</div>
            <div>
              {dayjs(element.orderTimeMs).format("MMMM D")}
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
    </div>
  );
};

export default OrderHeader;
