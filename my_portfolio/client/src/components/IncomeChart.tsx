import { useState, useMemo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Filler, // Area shading ke lice zaroori hai
  Legend,
} from "chart.js";
import type { ScriptableContext, TooltipItem } from "chart.js";
import type { Income } from "../types/finance";
import './IncomeChart.css';

// Vertical line plugin for dotted line on hover
const verticalLinePlugin = {
  id: 'verticalLine',
  afterDraw: (chart: any) => {
    if (chart.tooltip?._active?.length) {
      const { ctx } = chart;
      const activePoint = chart.tooltip._active[0];
      const x = activePoint.element.x;
      const topY = chart.scales.y.top;
      const bottomY = chart.scales.y.bottom;

      ctx.save();
      ctx.beginPath();
      ctx.setLineDash([5, 5]); // Dotted line style
      ctx.moveTo(x, topY);
      ctx.lineTo(x, bottomY);
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#888'; // Grey line
      ctx.stroke();
      ctx.restore();
    }
  }
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Filler,
  verticalLinePlugin
);

interface Props {
  incomes: Income[];
}

type Period = '1week' | 'monthly' | '3months' | '6months' | '1year' | '5years' | 'all';

const IncomeChart = ({ incomes }: Props) => {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>('monthly');

  // Helper to format date based on period for the Tooltip
  const formatTooltipTitle = (label: string, period: Period) => {
    const date = new Date(label);
    switch (period) {
      case '1week':
        return date.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'short' });
      case 'monthly':
      case '3months':
        return `Week of ${date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}`;
      case '1year':
        return date.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
      default:
        return label;
    }
  };

  const filterIncomes = (incomes: Income[], period: Period): Income[] => {
    const now = new Date();
    let startDate: Date;

    switch (period) {
      case '1week': {
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();
        const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
        const startOfLastWeek = new Date(lastDayOfMonth);
        startOfLastWeek.setDate(lastDayOfMonth.getDate() - 6);
        startDate = startOfLastWeek;
        break;
      }
      case 'monthly':
        startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        break;
      case '3months':
        startDate = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
        break;
      case '6months':
        startDate = new Date(now.getTime() - 180 * 24 * 60 * 60 * 1000);
        break;
      case '1year':
        startDate = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
        break;
      case '5years':
        startDate = new Date(now.getTime() - 5 * 365 * 24 * 60 * 60 * 1000);
        break;
      case 'all':
      default:
        return incomes;
    }

    const filtered = incomes.filter(income => new Date(income.date) >= startDate);
    return filtered.length > 0 ? filtered : incomes;
  };

  const groupData = (incomes: Income[], period: Period): Array<{ label: string; value: number; sortKey: string }> => {
    const grouped: { [key: string]: { value: number; sortKey: string } } = {};

    incomes.forEach((income) => {
      let key: string;
      let sortKey: string;
      const date = new Date(income.date);

      switch (period) {
        case '1week':
          key = date.toLocaleDateString('en-IN', { weekday: 'short' });
          sortKey = date.toISOString();
          break;
        case 'monthly':
          key = date.toLocaleDateString();
          sortKey = date.toISOString();
          break;
        case '3months':
        case '6months': {
          const weekStart = new Date(date);
          weekStart.setDate(date.getDate() - date.getDay());
          key = `Week of ${weekStart.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}`;
          sortKey = weekStart.toISOString();
          break;
        }
        case '1year':
          key = date.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
          sortKey = date.toISOString();
          break;
        case 'all':
        case '5years':
          key = date.getFullYear().toString();
          sortKey = date.getFullYear().toString();
          break;
        default:
          key = date.toLocaleString("default", { month: "short" });
          sortKey = date.toISOString();
      }

      if (!grouped[key]) {
        grouped[key] = { value: 0, sortKey };
      }
      grouped[key].value += income.amount;
    });

    return Object.entries(grouped).map(([label, { value, sortKey }]) => ({ label, value, sortKey }));
  };

  // Precompute data for each period
  const chartData = useMemo(() => {
    const periods: Period[] = ['1week', 'monthly', '3months', '6months', '1year', '5years', 'all'];
    const data: Record<Period, { labels: string[], data: number[], dates: string[] }> = {} as Record<Period, { labels: string[], data: number[], dates: string[] }>;

    periods.forEach(period => {
      const filtered = filterIncomes(incomes, period);
      const grouped = groupData(filtered, period);
      const sortedGrouped = grouped.sort((a, b) => a.sortKey.localeCompare(b.sortKey));

      // Generate display labels based on period
      const labels = sortedGrouped.map(item => {
        const date = new Date(item.sortKey);
        switch (period) {
          case '1week':
            return date.toLocaleDateString('en-IN', { weekday: 'short' });
          case 'monthly':
          case '3months':
          case '6months':
            return `Week of ${date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}`;
          case '1year':
            return date.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
          case 'all':
          case '5years':
            return date.getFullYear().toString();
          default:
            return item.label;
        }
      });

      data[period] = {
        labels,
        data: sortedGrouped.map(item => item.value),
        dates: sortedGrouped.map(item => item.sortKey)
      };
    });

    return data;
  }, [incomes]);

  const currentLabels = chartData[selectedPeriod]?.labels || [];
  const currentData = chartData[selectedPeriod]?.data || [];

  // Calculate current price and change
  const currentPrice = currentData.length > 0 ? currentData[currentData.length - 1] : 0;
  const previousPrice = currentData.length > 1 ? currentData[currentData.length - 2] : 0;
  const priceChange = currentPrice - previousPrice;
  const priceChangePercent = previousPrice > 0 ? ((priceChange / previousPrice) * 100).toFixed(0) : '0';

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      tooltip: {
        enabled: true,
        // Custom Tooltip style
        backgroundColor: '#111',
        titleColor: '#888',
        callbacks: {
          label: (context: any) => {
            const val = context.parsed.y;
            const prev = context.dataset.data[context.dataIndex - 1];
            const prefix = (prev && val < prev) ? '▼' : '▲';
            return `${prefix} ₹${val.toLocaleString()}`;
          }
        }
      },
      legend: { display: false }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#555' }
      },
      y: {
        position: 'right' as const,
        grid: { color: '#222' },
        ticks: {
          color: '#555',
          callback: (value: string | number) => typeof value === 'number' ? '₹' + value.toLocaleString() : value
        }
      }
    },
    elements: {
      point: { radius: 0, hoverRadius: 6, hoverBackgroundColor: '#fff', hoverBorderColor: '#10b981', hoverBorderWidth: 3 },
      line: { tension: 0.4 }
    }
  };

  const data = {
    labels: currentLabels,
    datasets: [
      {
        label: "Income Trend",
        data: currentData,
        fill: true,
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        // --- Red/Green Logic Starts Here ---
        segment: {
          borderColor: (ctx: any) => {
            const p0 = ctx.p0.parsed.y; // Pichla point
            const p1 = ctx.p1.parsed.y; // Current point
            return p1 >= p0 ? '#10b981' : '#f44336'; // Green if up, Red if down
          }
        },
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, 'rgba(16, 185, 129, 0.2)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          return gradient;
        },
      },
    ],
  };

  return (
    <div className="finance-card">
      <div className="time-tabs">
        {['1week', 'monthly', '3months', '6months', '1year', 'all'].map((p) => (
          <button
            key={p}
            className={selectedPeriod === p ? 'tab active' : 'tab'}
            onClick={() => setSelectedPeriod(p as Period)}
          >
            {p.replace('1week', '1W').replace('monthly', '1M').replace('3months', '3M').replace('6months', '6M').replace('1year', '1Y').toUpperCase()}
          </button>
        ))}
      </div>
      <div className="chart-wrapper">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default IncomeChart;
