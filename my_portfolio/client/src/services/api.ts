const API_BASE_URL = 'http://localhost:5000/api';

export const fetchData = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

export const loginUser = async (email: string, password: string) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Login failed');
  }

  return response.json();
};

export const registerUser = async (name: string, email: string, password: string) => {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Registration failed');
  }

  return response.json();
};

 export const addIncome = async (
  token: string,
  incomeData: {
    title: string;
    amount: number;
    category: string;
    date: string;
  }
 ) => {
  const response = await fetch(`${API_BASE_URL}/income`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(incomeData),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to add income');
  }

  return response.json();

 };

 export const getIncomes = async (token: string) => {

  const response = await fetch(`${API_BASE_URL}/income`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to fetch incomes');
  }

  return response.json();
};

export const updateIncome = async (
  token: string,
  id: string,
  incomeData: {
    title: string;
    amount: number;
    category: string;
    date: string;
  }
) => {
  const response = await fetch(`${API_BASE_URL}/income/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(incomeData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to update income");
  }

  return response.json();
};

export const deleteIncome = async (token: string, id: string) => {
  const response = await fetch(`${API_BASE_URL}/income/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to delete income");
  }

  return response.json();
};


    
    



