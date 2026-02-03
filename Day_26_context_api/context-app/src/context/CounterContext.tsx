/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext, type ReactNode } from 'react';

export interface CounterContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used inside CounterProvider");
  }
  return context;
};


