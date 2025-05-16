import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext();

// Generate and retrieve a unique cart token
const getCartToken = () => {
  let cartToken = localStorage.getItem("gameStore_cartToken");

  if (!cartToken) {
    cartToken = `gameStore_${crypto.randomUUID()}`;
    localStorage.setItem("gameStore_cartToken", cartToken);
  }
  return cartToken;
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      // Check if the item already exists in the cart
      const existingItem = state.find(
        (item) =>
          item.id === action.payload.id || item.title === action.payload.title
      );

      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id || item.title === action.payload.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);

    case "CLEAR_CART":
      return [];

    case "INCREASE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREASE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      );

    case "UPDATE_CART":
      return action.payload;

    default:
      return state;
  }
};

// Provide the cart

export const CartProvider = ({ children }) => {
  const cartKey = getCartToken();
  const [cart, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem(cartKey)) || [];
    dispatch({ type: "UPDATE_CART", payload: storedCart });
  }, [cartKey]);

  useEffect(() => {
    localStorage.setItem(cartKey, JSON.stringify(cart));
  }, [cartKey, cart]);

  return (
    <CartContext.Provider value={{ dispatch, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export const getCartContext = () => useContext(CartContext);
