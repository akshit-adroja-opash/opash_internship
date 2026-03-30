/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import type { Income } from "../types/finance";
import { addIncome, updateIncome } from "../services/api";

interface Props {
  token: string;
  selectedIncome?: Income | null;
  onSuccess: () => void;
  onCancel?: () => void;
}

interface FormData {
  amount: string;
  date: string;
  source: string;
  notes: string;
}

const getInitialData = (selectedIncome?: Income | null): FormData => {
  if (selectedIncome) {
    return {
      amount: selectedIncome.amount.toString(),
      date: selectedIncome.date.split("T")[0],
      source: selectedIncome.title || "",
      notes: selectedIncome.notes || "",
    };
  }
  return {
    amount: "",
    date: "",
    source: "",
    notes: "",
  };
};

const IncomeForm: React.FC<Props> = ({ token, selectedIncome, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState<FormData>(() => getInitialData(selectedIncome));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      alert("No token available. Please log in.");
      return;
    }

    try {
      const incomeData = {
        title: formData.source,
        amount: parseFloat(formData.amount) || 0,
        category: formData.source || 'Salary', // Use source as category per TODO requirements
        date: formData.date,
        notes: formData.notes,
      };

      if (selectedIncome) {
        await updateIncome(token, selectedIncome._id!, incomeData);
      } else {
        await addIncome(token, incomeData);
      }

      setFormData(getInitialData(null));
      onSuccess();
    } catch (error: any) {
      alert(`Error: ${error.response?.data?.message || error.message || "Failed to save"}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Amount & Date Grid */}
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="amount" className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant ml-1">
            Amount ($)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">$</span>
            <input
              id="amount"
              className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl pl-12 pr-4 py-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-bold placeholder:text-outline/30"
              placeholder="0.00"
              type="number"
              step="0.01"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="date" className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant ml-1">
            Date of Payment
          </label>
          <input
            id="date"
            className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-medium"
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="source" className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant ml-1">
          Source/Employer
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-lg">corporate_fare</span>
          <input
            id="source"
            className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl pl-16 pr-4 py-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-medium placeholder:text-outline/30"
            placeholder="e.g. Google Cloud"
            value={formData.source}
            onChange={(e) => setFormData({ ...formData, source: e.target.value })}
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="notes" className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant ml-1">
          Notes
        </label>
        <textarea
          id="notes"
          className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-medium placeholder:text-outline/30 min-h-[100px] resize-none"
          placeholder="Additional details..."
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        />
      </div>
      {/* Footer Buttons - assume parent handles or add */}
      <div className="flex items-center justify-end gap-4 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-3 rounded-xl text-sm font-bold text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-all"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-primary hover:bg-primary-container text-on-primary-container px-8 py-3 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-primary/20 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-lg">save</span>
          Save Entry
        </button>
      </div>
    </form>
  );
};

export default IncomeForm;
