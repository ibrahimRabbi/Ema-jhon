import { useState } from "react";

export default function Cart({items}) {

  let priceTotal = 0;
  let shippingTotal = 0;

  items.forEach(element => {
    priceTotal = priceTotal + element.price;
    shippingTotal = shippingTotal + element.shipping;
  });

  const taxTotal = priceTotal * 10 / 100;
  const grandTotal = priceTotal + shippingTotal + taxTotal;
   
    return (
      <div className="cart">
            <h3>order summary</h3>
            <div>
                <p>Selected Items : {items.length}</p>
                <p>Total price :{priceTotal} </p>
                <p>total shipping charge : {shippingTotal} </p>
                <p>Tax : {taxTotal} </p>
                <h4>Grand Total : {grandTotal} </h4>
            </div>
            <button>clear Cart</button>
            <button>review order</button>
      </div>
    );
}