import { useState } from "react";
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
  const [formData, setFormData] = useState<FormData>(() => {
    if (selectedIncome) {
      return {
        title: selectedIncome.title,
        amount: selectedIncome.amount.toString(),
        category: selectedIncome.category,
        date: selectedIncome.date.split("T")[0],
      };
    }
    return {
      title: "",
      amount: "",
      category: "salary",
      date: "",
    };
  });

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
      // Type guard for error with response
      const err = error as { response?: { data?: { message?: string } }; request?: unknown };
      if (err.response) {
        // Server responded with error
        console.error("Server error:", err.response.data);
        alert(`Error: ${err.response.data?.message || "Failed to save income"}`);
      } else if (err.request) {
        // Request made but no response
        console.error("No response from server");
        alert("Server is not responding. Please try again.");
      } else {
        // Error in setting up request
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="income-form-container">
      <form onSubmit={handleSubmit} key={selectedIncome?._id || 'new-form'}>
        <input
          type="text"
          placeholder="Income title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />

        <input
          type="number"
          placeholder="Amount"
          value={formData.amount}
          inputMode="decimal"
          step="0.01"
          min="0"
          onChange={(e) => {
            const value = e.target.value;
            // Allow numbers with decimals for salary amounts
            if (/^\d*\.?\d*$/.test(value)) {
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
