import { createContext } from 'react';

export type User = {
  id: number;
  name: string;
  email: string;
};

export type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export type UserContextType = {
  users: User[];
  addUser: (user: User) => void;
  deleteUser: (id: number) => void;
  updateUser: (id: number, user: User) => void;
  setUsers: (users: User[]) => void;
};

export type AppContextType = ThemeContextType & UserContextType;

export const AppContext = createContext<AppContextType | undefined>(undefined);
