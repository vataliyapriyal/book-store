import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  // Initialize cartItems with the value from local storage if it exists
  const [cartItems, setCartItems] = useState(() => {
    const localData = localStorage.getItem('cartItems');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    // Update local storage when cartItems changes
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(newItem) {
    setCartItems((prevItems) => {
      // Check if the cart already contains the item
      const existingItem = prevItems.find(item => item.id === newItem.id);
      if (existingItem) {
        // Update the quantity of the existing item
        return prevItems.map(item =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + newItem.quantity } : item
        );
      } else {
        // Add the new item to the cart
        return [...prevItems , { ...newItem, quantity:1}];
      }
    });
  }

  const updateQuantity = (bookId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === bookId ? { ...item, quantity: quantity } : item
      )
    );
  };

  const removeFromCart = (bookId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== bookId));
  };
  

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
