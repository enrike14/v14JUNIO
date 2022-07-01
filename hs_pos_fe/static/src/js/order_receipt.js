odoo.define("hs_pos_fe.order_receipt", function (require) {
  "use strict";

  const OrderReceipt = require("point_of_sale.OrderReceipt");
  const Registries = require("point_of_sale.Registries");

  const feOrderReceipt = (OrderReceipt) =>
    class extends OrderReceipt {
      constructor() {
        console.log("ENTRÖ:::::::::");
        super(...arguments);

        // this._receiptEnv = this.props.order.getOrderReceiptEnv();
      }
      get fe_receipt_render() {
        console.log("ENTRÖ222222:::::::::");
        /*         return {
          cufe: localStorage.getItem("cufe"),
          qr_code: localStorage.getItem("qr_code"),
          qr_img:
            "/web/image?model=pos.order&id=" +
            localStorage.getItem("id") +
            "&field=qr_code",
          is_pos: localStorage.getItem("is_pos"),
        }; */
        return true;
      }
    };

  Registries.Component.extend(OrderReceipt, feOrderReceipt);
  return feOrderReceipt;
});
