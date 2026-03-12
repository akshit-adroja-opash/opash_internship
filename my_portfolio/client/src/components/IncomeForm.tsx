<<<<<<< HEAD
import { useState } from "react";
=======
import { useState, useEffect } from "react";
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
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
<<<<<<< HEAD
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

=======
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

>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
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
<<<<<<< HEAD
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
=======
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
    }
  };

  return (
    <div className="income-form-container">
<<<<<<< HEAD
      <form onSubmit={handleSubmit} key={selectedIncome?._id || 'new-form'}>
=======
      <form onSubmit={handleSubmit}>
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
        <input
          type="text"
          placeholder="Income title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />

        <input
<<<<<<< HEAD
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
=======
          type="text"
          placeholder="Amount"
          value={formData.amount}
          inputMode="numeric"
          pattern="[0-9]*"
          onChange={(e) => {
            const value = e.target.value;
            // sirf numbers allow
            if (/^\d*$/.test(value)) {
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
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
