import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import type { Income } from "../types/finance";
import './IncomeChart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
    incomes: Income[];
}

const IncomeChart = ({ incomes }: Props) => {
    const monthlyData: { [key: string]: number } = {};

    incomes.forEach((income) => {
        const month = new Date(income.date).toLocaleString("default", {
            month: "short",
        });
        monthlyData[month] = (monthlyData[month] || 0) + income.amount;
    });

    return (
        <Bar
            data={{
                labels: Object.keys(monthlyData),
                datasets: [
                    {
                        label: "Monthly Income",
                        data: Object.values(monthlyData),
                    },
                ],
            }}
        />
    );
};

export default IncomeChart;
