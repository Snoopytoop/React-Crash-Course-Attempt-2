import React, { useState } from "react";

function Cart() {
  const [cart, setCart] = useState({ item: "apple", quantity: 0 });

  function addApple() {
    setCart((prevCart) => ({
      ...prevCart,
      quantity: prevCart.quantity + 1,
    }));
  }

  function takeApple() {
    setCart((prevCart) => ({
      ...prevCart,
      quantity: prevCart.quantity - 1,
    }));
  }

  return (
    <div>
      <button onClick={takeApple}>-</button>
      {cart.quantity}
      {cart.item}
      <button onClick={addApple}>+</button>
    </div>
  );
}

export default Cart;
