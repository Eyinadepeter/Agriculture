import type { ReactElement } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";
import Notifications from "../components/dashboard/Notifications";
import StorageOverview from "../components/dashboard/StorageOverview";
import HarvestOverview from "../components/dashboard/HarvestOverview";

export default function Storage(): ReactElement {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <Sidebar />

        <div className="flex-1 flex">
          <div className="flex-1 p-6">
            <Navbar />

            <div className="grid gap-6 lg:grid-cols-2">
              <StorageOverview />
              <HarvestOverview />
            </div>

            <div className="mt-6">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800">
                  Storage Details
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Review inventory levels and warehouse capacity for all produce.
                </p>
              </div>
            </div>
          </div>

          <aside className="hidden xl:flex w-80 flex-col gap-5 p-6 bg-white border-l">
            <Notifications />
            <StorageOverview />
            <HarvestOverview />
          </aside>
        </div>
      </div>
    </div>
  );
}
