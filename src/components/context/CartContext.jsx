import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // add to cart
  const addToCart = (item) => {
    setCart([...cart, item]);   // set add to cart array in setCart which is state updater function

    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If item already exists in the cart, increase its quantity
      existingItem.quantity += 1;
      setCart([...cart]);
    } else {
      // If item does not exist in the cart, add it with quantity 1
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };


  // for remove cart item
  const removeCartItem = (itemId) => {
    setCart((item) => item.filter((item) => item.id !== itemId));
  };

  // increse the cart product quantity 
  const increaseQuantity = (item) => {
    const updatedcart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCart(updatedcart);
  };

  // decrese the cart product quantity
  const decreaseQuantity = (item) => {
    const updatedcart = cart.map((cartItem) => {
      if (cartItem.id === item.id && cartItem.quantity > 1) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
    setCart(updatedcart);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        removeCartItem,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
