import React, { createContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Create the context outside of the Provider component
const MyContext = createContext();

const Provider = ({ children }) => {
 useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  // Define your context state or functions here
    const contextValue = {
      aos: AOS,
      // Define your context state or functions here
    };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

// Export both the Provider and the Context for use in other components
export { Provider, MyContext };
