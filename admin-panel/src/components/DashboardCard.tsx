import type { FC, ReactNode } from "react";
import type { IconType } from "react-icons";
import "./DashboardCard.css";

type DashboardCardProps = {
  title: string;
  value: number | string | ReactNode;
  icon: IconType;
  color: string; 
  trend?: string; 
};

const DashboardCard: FC<DashboardCardProps> = ({
  title,
  value,
  icon: Icon,
  color,
  trend,
}) => {
  return (
    <div className="modern-card">
      <div className="card-content">
        <p className="card-label">{title}</p>
        <h2 className="card-amount">{value}</h2>
        {trend && <span className="card-trend">{trend} since last month</span>}
      </div>
      <div 
        className="icon-wrapper" 
        style={{ backgroundColor: `${color}20`, color: color }}
      >
        <Icon size={24} />
      </div>
    </div>
  );
};

export default DashboardCard;