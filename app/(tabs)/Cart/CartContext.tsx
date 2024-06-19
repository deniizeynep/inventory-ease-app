import React, { createContext, useState, useContext } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
}

interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: (product) => {},
});

export const CartProvider: React.FC = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
