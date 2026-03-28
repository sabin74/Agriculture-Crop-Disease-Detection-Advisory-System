import { createContext, useState, useEffect, useContext } from "react";
import { loginUser, registerUser } from "../api/auth.api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (storedToken) {
      setToken(storedToken);
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    const data = await loginUser(credentials);
    
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data)); 
    
    setToken(data.token); 
    setUser(data);
    
    return data; 
  };

  const register = async (userData) => {
    const data = await registerUser(userData);
    
    // After registration, also log them in
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data));
    
    setToken(data.token);
    setUser(data);
    
    return data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user, 
        isAuthenticated: !!token,
        login,
        register,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);