import { useEffect, useState, useCallback } from "react";
import IncomeChart from "../components/IncomeChart";
import IncomeForm from "../components/IncomeForm";
import IncomeTable from "../components/IncomeTable";
import type { Income } from "../types/finance";
import { getIncomes, deleteIncome } from "../services/api";
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [selectedIncome, setSelectedIncome] = useState<Income | null>(null);
  const token = localStorage.getItem("token"); // Assuming token is stored in localStorage

  const fetchIncomes = useCallback(async () => {
    if (!token) return;

    try {
      const data = await getIncomes(token);
      setIncomes(data);
    } catch (error) {
      console.error("Error fetching incomes:", error);
    }
  }, [token]);

  useEffect(() => {
    const loadIncomes = async () => {
      if (token) {
        await fetchIncomes();
      }
    };
    loadIncomes();
  }, [token]);

  const handleEdit = (income: Income) => {
    setSelectedIncome(income);
  };

  const handleDelete = async (id: string) => {
    if (!token) return;

    try {
      await deleteIncome(token, id);
      setIncomes(incomes.filter((income) => income._id !== id));
    } catch (error) {
      console.error("Error deleting income:", error);
    }
  };

  const handleSuccess = () => {
    fetchIncomes();
    setSelectedIncome(null);
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-section">
        <h2>Add/Edit Income</h2>
        <IncomeForm token={token!} selectedIncome={selectedIncome} onSuccess={handleSuccess} />
      </div>
      <div className="dashboard-section">
        <h2>Income Chart</h2>
        <IncomeChart incomes={incomes} />
      </div>
      <div className="dashboard-section">
        <IncomeTable incomes={incomes} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );

};

export default Dashboard;
