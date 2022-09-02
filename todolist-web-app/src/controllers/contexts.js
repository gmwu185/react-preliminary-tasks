import { createContext, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import ToDoList from '../components/todolist/index';

export const AuthContext = createContext(localStorage.getItem('token') || null);
export const useAuth = () => useContext(AuthContext);
export const ProtectedRoute = () => {
  const { token } = useAuth();
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return <ToDoList />;
};

export const DatasContext = createContext({});
export const useDatasContext = () => useContext(DatasContext);
