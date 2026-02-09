import { useEffect, useState } from "react";
import IncomeChart from "../components/IncomeChart";
import IncomeForm from "../components/IncomeForm";
import IncomeTable from "../components/IncomeTable";
import type { Income } from "../types/finance";
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [selectedIncome, setSelectedIncome] = useState<Income | null>(null);
  const token = localStorage.getItem("token"); // Assuming token is stored in localStorage

  const fetchIncomes = () => {
    if (!token) return;

    fetch("/api/income", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setIncomes(data))
      .catch((error) => console.error("Error fetching incomes:", error));
  };

  useEffect(() => {
    fetchIncomes();
  }, [token]);

  const handleEdit = (income: Income) => {
    setSelectedIncome(income);
  };

  const handleDelete = async (id: string) => {
    if (!token) return;

    try {
      const response = await fetch(`/api/income/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setIncomes(incomes.filter((income) => income.id !== id));
      } else {
        console.error("Error deleting income");
      }
    } catch (error) {
      console.error("Error deleting income:", error);
    }
  };

  const handleSuccess = () => {
    fetchIncomes();
    setSelectedIncome(null);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <IncomeForm token={token!} selectedIncome={selectedIncome} onSuccess={handleSuccess} />
      <IncomeChart incomes={incomes} />
      <IncomeTable incomes={incomes} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );

};

export default Dashboard;
