import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { us } from "./reducer";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p></p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button> Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
