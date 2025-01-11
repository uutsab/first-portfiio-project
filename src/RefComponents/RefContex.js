import React, { createContext, useContext, useRef, useState } from "react";

const RefContext = createContext();

export const RefProvider = ({ children }) => {
  const AppRef = useRef(null);
  const [isOverflowHidden, setIsOverflowHidden] = useState(false);
  const [clickMenu, setclickMenu] = useState(false);

  const handleButtonClick = () => {
    setIsOverflowHidden(!isOverflowHidden);
    setclickMenu(!clickMenu);
  };

  return (
    <RefContext.Provider
      value={{ AppRef, isOverflowHidden, clickMenu, handleButtonClick }}
    >
      {children}
    </RefContext.Provider>
  );
};

export const Refuse = () => {
  const context = useContext(RefContext);

  if (context === undefined) {
    throw new Error("useMyUser must be used within a MyUserProvider");
  }

  return context;
};
