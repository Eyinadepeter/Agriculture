import { MoreHorizontal } from "lucide-react";

type HarvestStatus =
  | "In Storage"
  | "Ready"
  | "Sold"
  | "In Transit";

interface Harvest {
  id: number;
  produce: string;
  quality: string;
  quantity: string;
  location: string;
  status: HarvestStatus;
}

const harvests: Harvest[] = [
  {
    id: 1,
    produce: "Tomatoes",
    quality: "Premium",
    quantity: "500 kg",
    location: "Lagos",
    status: "In Storage",
  },
  {
    id: 2,
    produce: "Peppers",
    quality: "Grade A",
    quantity: "320 kg",
    location: "Ibadan",
    status: "Ready",
  },
  {
    id: 3,
    produce: "Onions",
    quality: "Premium",
    quantity: "700 kg",
    location: "Kaduna",
    status: "Sold",
  },
  {
    id: 4,
    produce: "Carrots",
    quality: "Grade A",
    quantity: "210 kg",
    location: "Jos",
    status: "In Transit",
  },
];

const statusStyles: Record<HarvestStatus, string> = {
  "In Storage": "bg-blue-100 text-blue-700",
  Ready: "bg-green-100 text-green-700",
  Sold: "bg-gray-100 text-gray-700",
  "In Transit": "bg-yellow-100 text-yellow-700",
};

export default function HarvestTable() {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Recent Harvests
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Track your latest produce and storage status.
          </p>
        </div>

        <button className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-3">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="pb-2">Produce</th>
              <th className="pb-2">Quality</th>
              <th className="pb-2">Quantity</th>
              <th className="pb-2">Location</th>
              <th className="pb-2">Status</th>
              <th />
            </tr>
          </thead>

          <tbody>
            {harvests.map((item) => (
              <tr
                key={item.id}
                className="bg-gray-50 transition hover:bg-gray-100"
              >
                <td className="rounded-l-xl px-4 py-4 font-medium">
                  {item.produce}
                </td>

                <td>{item.quality}</td>

                <td>{item.quantity}</td>

                <td>{item.location}</td>

                <td>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      statusStyles[item.status]
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="rounded-r-xl pr-4 text-right">
                  <button className="rounded-lg p-2 hover:bg-white">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}