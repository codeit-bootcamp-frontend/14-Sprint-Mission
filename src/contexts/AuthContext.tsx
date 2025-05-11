'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { parseJwt, DecodedToken } from '@/utils/parseJwt';

interface AuthUser {
  id: number;
  nickname: string;
  email: string;
  image: string | null;
}

interface AuthContextType {
  token: DecodedToken | null;
  user: AuthUser | null;
  setUser: (user: AuthUser | null) => void;
  setToken: (token: DecodedToken | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<DecodedToken | null>(null);
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const rawUser = localStorage.getItem('user');
  
    console.log('token', token);
    console.log('refreshToken', refreshToken);
    console.log('rawUser', rawUser);

    if (token) {
      const parsedToken = parseJwt(token);
  
      if (parsedToken && parsedToken.exp > Date.now() / 1000) {
        if (rawUser) {
          const user = JSON.parse(rawUser);
          setUser(user);
        }
      } else {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
      }
    }
  }, []);
  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, setToken, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};