import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export interface AppState {
  image?: string;
  comingSoon: boolean;
  mobile?: boolean;
  dark: boolean;
  loadingCount: number;
}

const initialState: AppState = {
  image: undefined,
  mobile: false,
  dark: false,
  comingSoon: false,
  loadingCount: 0
};

const AppContext = createContext<{
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
  incrementLoading: () => void;
  decrementLoading: () => void;
}>({
  state: initialState,
  setState: () => {},
  incrementLoading: () => {},
  decrementLoading: () => {},
});

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<AppState>(initialState);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const darkModeFromCookie = Cookies.get("darkMode");
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const darkMode = darkModeFromCookie === undefined
      ? darkModeMediaQuery.matches
      : darkModeFromCookie === "true";
    setState((prevState) => ({
      ...prevState,
      dark: darkMode,
    }));

    const handleChange = (event: MediaQueryListEvent) => {
      setState((prevState) => ({
        ...prevState,
        dark: event.matches,
      }));
    };

    darkModeMediaQuery.addEventListener("change", handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  
  useEffect(() => {
    // Only set the cookie after the component has mounted
    if (isMounted) {
      Cookies.set("darkMode", state.dark.toString(), { expires: 365 });
    } else {
      setIsMounted(true);
    }
  }, [state.dark, isMounted]);

  useEffect(() => {
  }, [state.loadingCount])

  const incrementLoading = () => {
    setState((prevState) => ({ ...prevState, loadingCount: prevState.loadingCount + 1 }));
  };

  const decrementLoading = () => {
    setState((prevState) => ({ ...prevState, loadingCount: prevState.loadingCount - 1 }));
  };

  return (
    <AppContext.Provider value={{ state, setState, incrementLoading, decrementLoading }}>
      {children}
    </AppContext.Provider>
  );
};
