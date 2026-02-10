import { useState, useEffect } from "react";
import type { Income } from "../types/finance";
import { addIncome, updateIncome } from "../services/api";
import "./IncomeForm.css";

interface Props {
  token: string;
  selectedIncome?: Income | null;
  onSuccess: () => void;
}

interface FormData {
  title: string;
  amount: string;
  category: string;
  date: string;
}

const IncomeForm = ({ token, selectedIncome, onSuccess }: Props) => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    amount: "",
    category: "salary",
    date: "",
  });

  useEffect(() => {
    setFormData({
      title: selectedIncome ? selectedIncome.title : "",
      amount: selectedIncome ? selectedIncome.amount.toString() : "",
      category: selectedIncome ? selectedIncome.category : "salary",
      date: selectedIncome ? selectedIncome.date.split("T")[0] : "",
    });
  }, [selectedIncome]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      console.error("No token available. Please log in.");
      return;
    }

    try {
      const incomeData = {
        title: formData.title,
        amount: parseFloat(formData.amount) || 0,
        category: formData.category,
        date: formData.date,
      };

      if (selectedIncome) {
        await updateIncome(token, selectedIncome._id, incomeData);
      } else {
        await addIncome(token, incomeData);
      }

      setFormData({
        title: "",
        amount: "",
        category: "salary",
        date: "",
      });
      onSuccess();
    } catch (error) {
      console.error("Error saving income:", error);
    }
  };

  return (
    <div className="income-form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Income title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="Amount"
          value={formData.amount}
          inputMode="numeric"
          pattern="[0-9]*"
          onChange={(e) => {
            const value = e.target.value;
            // sirf numbers allow
            if (/^\d*$/.test(value)) {
              setFormData({ ...formData, amount: value });
            }
          }}
          required
        />

        <select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
          <option value="salary">Salary</option>
          <option value="freelance">Freelance</option>
          <option value="business">Business</option>
          <option value="investment">Investment</option>
          <option value="other">Other</option>
        </select>

        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required
        />

        <button type="submit">
          {selectedIncome ? "Update Income" : "Add Income"}
        </button>
      </form>
    </div>
  );
};

export default IncomeForm;
