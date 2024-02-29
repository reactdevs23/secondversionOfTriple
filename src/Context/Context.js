import React, { createContext, useContext, useEffect, useState } from "react";

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

export const ContextProvider = ({ children }) => {
  const [isJoinWaitingListModalActive, setIsJoinWaitingListModalActive] =
    useState(false);
  const [isWhiteListModalActive, setIsWhiteListModalActive] = useState(false);

  return (
    <MyContext.Provider
      value={{
        isJoinWaitingListModalActive,
        setIsJoinWaitingListModalActive,
        isWhiteListModalActive,
        setIsWhiteListModalActive,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
