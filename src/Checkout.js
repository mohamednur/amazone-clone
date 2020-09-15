import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <img
        className="checkout__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/JJ/1500x300_EN.jpg"
        alt=""
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* list out all products in  basket */}
          {basket?.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
        
      )}
    </div>
  );
}

export default Checkout;
