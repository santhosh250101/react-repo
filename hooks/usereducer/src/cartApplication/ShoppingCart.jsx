import React, { useReducer } from "react";

const ShoppingCart = () => {
  const intialState = {
    cart: ["Product1", "Product2"],
  };

  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      case "CLEAR":
        return {
          ...state,
          cart: [],
        };
    }
  };

  const [state, dispatch] = useReducer(cartReducer, intialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "ADD", payload: "Product1" })}>
        Product1
      </button>
      <button onClick={() => dispatch({ type: "ADD", payload: "Product2" })}>
        Product2
      </button>
      <button onClick={()=>dispatch({type:"CLEAR"})}>Clear Cart</button>
      <ul>
        {state.cart.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
