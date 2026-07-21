import type { ReactElement } from "react";

interface StorageDataItem {
  name: string;
  stored: number;
  capacity: number;
  color: string;
}

const storageData: StorageDataItem[] = [
  {
    name: "Tomatoes",
    stored: 520,
    capacity: 700,
    color: "bg-green-600",
  },
  {
    name: "Peppers",
    stored: 310,
    capacity: 500,
    color: "bg-yellow-500",
  },
  {
    name: "Onions",
    stored: 180,
    capacity: 300,
    color: "bg-blue-500",
  },
  {
    name: "Carrots",
    stored: 120,
    capacity: 250,
    color: "bg-red-500",
  },
];

export default function StorageOverview(): ReactElement {
  const totalStored = storageData.reduce(
    (sum, item) => sum + item.stored,
    0
  );

  const totalCapacity = storageData.reduce(
    (sum, item) => sum + item.capacity,
    0
  );

  const percentage = Math.round(
    (totalStored / totalCapacity) * 100
  );

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Storage Overview
        </h2>

        <p className="text-sm text-gray-500">
          Current warehouse capacity
        </p>
      </div>

      {/* Overall Progress */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">
            Capacity Used
          </span>

          <span className="font-bold text-green-700">
            {percentage}%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-green-600 transition-all"
            style={{
              width: `${percentage}%`,
            }}
          />
        </div>

        <p className="mt-2 text-xs text-gray-500">
          {totalStored} kg of {totalCapacity} kg used
        </p>
      </div>

      {/* Produce Breakdown */}
      <div className="space-y-5">
        {storageData.map((item) => {
          const percent = Math.round(
            (item.stored / item.capacity) * 100
          );

          return (
            <div key={item.name}>
              <div className="mb-2 flex justify-between">
                <span className="font-medium text-gray-700">
                  {item.name}
                </span>

                <span className="text-sm text-gray-500">
                  {item.stored} / {item.capacity} kg
                </span>
              </div>

              <div className="h-2 rounded-full bg-gray-200">
                <div
                  className={`${item.color} h-full rounded-full`}
                  style={{
                    width: `${percent}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}