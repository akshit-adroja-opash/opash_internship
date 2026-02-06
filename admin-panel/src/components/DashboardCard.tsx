import type { FC, ReactNode } from "react";
import type { IconType } from "react-icons";

type DashboardCardProps = {
  title: string;
  value: number | string | ReactNode;
  icon: IconType;
  bgColor: string;
};

const DashboardCard: FC<DashboardCardProps> = ({
  title,
  value,
  icon: Icon,
  bgColor,
}) => {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <div className="card-icon">
        <Icon size={30} />
      </div>
      <p className="card-title">{title}</p>
      <h2 className="card-value">{value}</h2>
    </div>
  );
};

export default DashboardCard;
