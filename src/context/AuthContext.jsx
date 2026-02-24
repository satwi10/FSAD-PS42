import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // 👉 SIMPLE MOCK LOGIN
  const login = (username, password) => {
    // You can replace this with API later
    const role = username === "admin" || username === "102008"
      ? "ADMIN"
      : "STUDENT";

    setUser({
      username,
      role,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
