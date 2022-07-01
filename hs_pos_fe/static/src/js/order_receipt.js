odoo.define("hs_pos_fe.order_receipt", function (require) {
  "use strict";

  const OrderReceipt = require("point_of_sale.OrderReceipt");
  const Registries = require("point_of_sale.Registries");

  const feOrderReceipt = (OrderReceipt) =>
    class extends OrderReceipt {
      constructor() {
        console.log("ENTRÖ:::::::::");
        super(...arguments);

        this._receiptEnv = this.props.order.getOrderReceiptEnv();
      }
    };

  Registries.Component.extend(OrderReceipt, feOrderReceipt);
  return OrderReceipt;
});
