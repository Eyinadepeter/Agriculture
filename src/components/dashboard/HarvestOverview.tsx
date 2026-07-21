import type { ReactElement } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface HarvestData {
  name: string;
  value: number;
}

const data: HarvestData[] = [
  { name: "Tomatoes", value: 45 },
  { name: "Peppers", value: 30 },
  { name: "Onions", value: 15 },
  { name: "Carrots", value: 10 },
];

const COLORS: string[] = [
  "#1B5E20",
  "#4CAF50",
  "#81C784",
  "#C8E6C9",
];

export default function HarvestOverview(): ReactElement {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Harvest Overview
          </h2>
          <p className="text-sm text-gray-500">
            Distribution of harvested produce
          </p>
        </div>

        <button className="text-sm text-green-700 hover:underline">
          Details
        </button>
      </div>

      {/* Chart */}
      <div className="relative h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={70}
              outerRadius={95}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        {/* Center Text */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-green-700">1.7T</h2>

          <p className="text-sm text-gray-500">Total Harvest</p>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 space-y-3">
        {data.map((item, index) => (
          <div
            key={item.name}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span
                className="h-3 w-3 rounded-full"
                style={{
                  backgroundColor: COLORS[index],
                }}
              />

              <span className="text-sm text-gray-700">
                {item.name}
              </span>
            </div>

            <span className="text-sm font-semibold">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}