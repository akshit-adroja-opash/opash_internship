export interface Income {
    _id: string;   // ✅ REQUIRED
    title: string;
    amount: number;
    category: string;
    date: string;
}

export interface Investment {
  id?: string;
  name: string;
  amount: number;
  type: string;
  date: string;
  description?: string;
}
