import { createContext } from 'react';

export type User = {
  id: number;
  name: string;
  email: string;
};

export type UserContextType = {
  users: User[];
  addUser: (user: User) => void;
  deleteUser: (id: number) => void;
  updateUser: (id: number, user: User) => void;
  setUsers: (users: User[]) => void;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);
