import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import Product from "./Product";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h2 className="checkout__title">Shopping Basket </h2>

          {basket.map((change) => (
            <Product
              id={change.id}
              title={change.title}
              image={change.image}
              price={change.price}
              rating={change.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
