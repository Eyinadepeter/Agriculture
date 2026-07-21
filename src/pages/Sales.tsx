import type { ReactElement } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";
import HarvestOverview from "../components/dashboard/HarvestOverview";
import MarketGrid from "../components/dashboard/MarketGrid";
import Notifications from "../components/dashboard/Notifications";

export default function Sales(): ReactElement {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex">
          <div className="flex-1 p-6">
            <Navbar />
            <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm">
              <h1 className="text-3xl font-semibold text-gray-800">Sales</h1>
              <p className="mt-2 text-sm text-gray-500">
                Review completed transactions, buyer demand, and revenue trends.
              </p>
            </div>
            <div className="mt-6 grid gap-6 xl:grid-cols-2">
              <HarvestOverview />
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800">Revenue Summary</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Total sales, average order value, and active buyers over time.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <MarketGrid />
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
