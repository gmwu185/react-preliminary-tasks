import { createContext, useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthContext = createContext(localStorage.getItem('token') || null);
export const useAuth = () => useContext(AuthContext);
export const ProtectedRoute = () => {
  const { token } = useAuth();
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export const DatasContext = createContext({});
export const useDatasContext = () => useContext(DatasContext);
