import type { ReactElement } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";
import HarvestOverview from "../components/dashboard/HarvestOverview";
import StorageOverview from "../components/dashboard/StorageOverview";
import Notifications from "../components/dashboard/Notifications";

export default function Analytics(): ReactElement {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex">
          <div className="flex-1 p-6">
            <Navbar />
            <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm">
              <h1 className="text-3xl font-semibold text-gray-800">Analytics</h1>
              <p className="mt-2 text-sm text-gray-500">
                View key performance indicators, trends, and operational insights.
              </p>
            </div>
            <div className="mt-6 grid gap-6 xl:grid-cols-2">
              <HarvestOverview />
              <StorageOverview />
            </div>
            <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800">Insights</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-gray-200 p-5">
                  <p className="text-sm text-gray-500">Conversion rate</p>
                  <p className="mt-2 text-3xl font-bold text-green-700">12.4%</p>
                </div>
                <div className="rounded-3xl border border-gray-200 p-5">
                  <p className="text-sm text-gray-500">Shipment success</p>
                  <p className="mt-2 text-3xl font-bold text-green-700">96%</p>
                </div>
              </div>
            </div>
          </div>
          <aside className="hidden xl:flex w-80 flex-col gap-5 p-6 bg-white border-l">
            <Notifications />
            <HarvestOverview />
          </aside>
        </div>
      </div>
    </div>
  );
}
