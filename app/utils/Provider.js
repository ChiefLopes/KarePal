import React, { createContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// this is intended for some side animations where I can't use framer motion
const MyContext = createContext();

const Provider = ({ children }) => {
 useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
 
    const contextValue = {
      aos: AOS,
      
    };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export { Provider, MyContext };
