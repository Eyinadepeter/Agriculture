import type { ReactElement } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";
import Notifications from "../components/dashboard/Notifications";
import MarketGrid from "../components/dashboard/MarketGrid";
import HarvestOverview from "../components/dashboard/HarvestOverview";

export default function Market(): ReactElement {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <Sidebar />

        <div className="flex-1 flex">
          <div className="flex-1 p-6">
            <Navbar />

            <div className="mt-6">
              <MarketGrid />
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-2">
              <HarvestOverview />
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800">
                  Buyer Activity
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Monitor incoming buyer requests and market demand.
                </p>
              </div>
            </div>
          </div>

          <aside className="hidden xl:flex w-80 flex-col gap-5 p-6 bg-white border-l">
            <Notifications />
            <HarvestOverview />
            <MarketGrid />
          </aside>
        </div>
      </div>
    </div>
  );
}
