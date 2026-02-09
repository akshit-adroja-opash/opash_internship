import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { AppContext, type User } from './AppContextType';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  // Theme state
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));

    // Apply dark class to all necessary elements
    const rootElement = document.getElementById('root');
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      if (rootElement) rootElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      if (rootElement) rootElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // User state
  const [users, setUsers] = useState<User[]>(() => {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      return JSON.parse(savedUsers);
    }
    return [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
    ];
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const addUser = (user: User) => {
    setUsers([...users, user]);
  };

  const deleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id: number, updatedUser: User) => {
    setUsers(
      users.map((user) =>
        user.id === id ? updatedUser : user
      )
    );
  };

  const value = {
    darkMode,
    toggleDarkMode,
    users,
    addUser,
    deleteUser,
    updateUser,
    setUsers,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
