import type { FC } from "react";
import { useEffect, useState } from "react";
import { FiUsers, FiShoppingBag, FiDollarSign } from "react-icons/fi";
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
        setError("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [users.length]);

  if (loading) return (
    <div className="status-container">
      <div className="spinner"></div>
      <p>Refreshing data...</p>
    </div>
  );

  if (error) return (
    <div className="status-container">
      <div className="error-box">{error}</div>
    </div>
  );

  if (!data) return null;

  return (
    <div className="dashboard-view">
      <header className="view-header">
        <div>
          <h2 className="view-title">Dashboard Overview</h2>
          <p className="view-subtitle">Welcome back! Here is what's happening today.</p>
        </div>
        <button className="primary-btn">Generate Report</button>
      </header>

      <div className="stats-grid">
        <DashboardCard
          title="Total Users"
          value={data.users.toLocaleString()}
          icon={FiUsers}
          color="#3b82f6"
          trend="+12%"
        />
        <DashboardCard
          title="Total Orders"
          value={data.orders}
          icon={FiShoppingBag}
          color="#10b981"
          trend="+5%"
        />
        <DashboardCard
          title="Total Revenue"
          value={`$${data.revenue.toLocaleString()}`}
          icon={FiDollarSign}
          color="#f59e0b"
          trend="+18%"
        />
      </div>
    </div>
  );
};

export default Dashboard;