import type { FC } from "react";
import { useEffect, useState } from "react";
import { FaUsers, FaShoppingCart, FaRupeeSign } from "react-icons/fa";
import DashboardCard from "../components/DashboardCard";
import { useUsers } from "../contexts/useUsers";
import "./dashboard.css";

type DashboardData = {
  users: number;
  orders: number;
  revenue: number;
};

const Dashboard: FC = () => {
  const { users } = useUsers();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/carts/1");
        const result = await response.json();

        setData({
          users: users.length,
          orders: result.totalProducts,
          revenue: result.total,
        });
      } catch {
        setError("failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [users.length]);

  if (loading)
    return (
      <div className="loading">
        <h2>⏳ Loading Dashboard...</h2>
      </div>
    );

  if (error)
    return (
      <div className="error">
        <h2>❌ {error}</h2>
      </div>
    );

  if (!data) return null;

  return (
    <div className="dashboard">
      <h2>📊 Dashboard Overview</h2>
      <div className="card-container">
        <DashboardCard
          title="Total Users"
          value={data.users}
          icon={FaUsers}
          bgColor="#e0f2ff"
        />
        <DashboardCard
          title="Total Orders"
          value={data.orders}
          icon={FaShoppingCart}
          bgColor="#e6ffe6"
        />
        <DashboardCard
          title="Revenue"
          value={`$${data.revenue}`}
          icon={FaRupeeSign}
          bgColor="#fff4e6"
        />
      </div>
    </div>
  );
};

export default Dashboard;
