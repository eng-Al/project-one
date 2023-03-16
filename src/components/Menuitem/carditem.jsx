import React, { useState, useContext } from "react";

// create a context for the shopping cart
const CartContext = React.createContext();

// create a provider component to wrap the app with the cart context
export function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  // add item to the cart
  function addItemToCart(item) {
    setCartItems(prevItems => [...prevItems, item]);
  }

  // remove item from the cart
  function removeItemFromCart(itemId) {
    setCartItems(prevItems => prevItems.filter((item) => item.id !== itemId));
  }

  // calculate the total cost of items in the cart
  function calculateTotal() {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  }

  // define the cart context value
  const cartContextValue = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    calculateTotal,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
}

// create a custom hook to access the cart context
export function useCart() {
  return useContext(CartContext);
}

// create a component to display the shopping cart
export function ShoppingCart() {
  const { cartItems, removeItemFromCart, calculateTotal } = useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <button onClick={() => removeItemFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
          <p>Total: {calculateTotal()}</p>
        </div>
      )}
    </div>
  );
}
