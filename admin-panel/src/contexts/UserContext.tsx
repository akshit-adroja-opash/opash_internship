import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { UserContext, type User } from './UserContextType';

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>(() => {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      return JSON.parse(savedUsers);
    }
    return [
      { id: 1, name: "Akshit Adroja", email: "Akshit@gmail.com" },
      { id: 2, name: "Jeel Mavani", email: "Jeel@gmail.com" },
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
    users,
    addUser,
    deleteUser,
    updateUser,
    setUsers,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
  
};
