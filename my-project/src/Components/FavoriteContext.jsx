/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      if (prev.some(fav => fav.id === product.id)) {
        return prev.filter(fav => fav.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
