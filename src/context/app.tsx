import React, { createContext, useContext, useState } from "react";

export interface AppState {
  image?: string;
  mobile?: boolean,
  dark: boolean,
}

const initialState: AppState = {
  image: undefined,
  mobile: false,
  dark: false
};

const AppContext = createContext<{
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
}>({
  state: initialState,
  setState: () => {},
});

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<AppState>(initialState);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};
