import { createContext, useCallback, type ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectIsLoggedIn, setLoginStatus } from "../store/slices/authSlice";

interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const login = useCallback(() => dispatch(setLoginStatus(true)), [dispatch]);
  const logout = useCallback(() => dispatch(setLoginStatus(false)), [dispatch]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
