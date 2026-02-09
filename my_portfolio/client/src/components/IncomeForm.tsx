import { useState, useEffect } from "react";
import type { Income } from "../types/finance";
import './IncomeForm.css';

interface Props {
    token: string;
    selectedIncome?: Income | null;
    onSuccess: () => void;
}

const IncomeForm = ({ token, selectedIncome, onSuccess }: Props) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState<number>(0);
    const [category, setCategory] = useState("salary");
    const [date, setDate] = useState("");

    useEffect(() => {
        if (selectedIncome) {
            setTitle(selectedIncome.title);
            setAmount(selectedIncome.amount);
            setCategory(selectedIncome.category);
            setDate(selectedIncome.date.split("T")[0]);
        } else {
            setTitle("");
            setAmount(0);
            setCategory("salary");
            setDate("");
        }
    }, [selectedIncome]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const incomeData = { title, amount, category, date };

        const url = selectedIncome ? `/api/income/${selectedIncome.id}` : "/api/income";
        const method = selectedIncome ? "PUT" : "POST";

        const response = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(incomeData),
        });

        if (response.ok) {
            setTitle("");
            setAmount(0);
            setCategory("salary");
            setDate("");
            onSuccess();
        } else {
            console.error("Error saving income");
        }
    };

    return (
        <div className="income-form-container">
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Income title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                required
            />
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="salary">Salary</option>
                <option value="freelance">Freelance</option>
                <option value="business">Business</option>
                <option value="investment">Investment</option>
                <option value="other">Other</option>
            </select>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
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
