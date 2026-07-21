import type { ReactElement } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";
import Notifications from "../components/dashboard/Notifications";
import HarvestTable from "../components/dashboard/HarvestTable";
import HarvestOverview from "../components/dashboard/HarvestOverview";
import StorageOverview from "../components/dashboard/StorageOverview";

export default function Harvests(): ReactElement {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <Sidebar />

        <div className="flex-1 flex">
          <div className="flex-1 p-6">
            <Navbar />

            <div className="mt-6">
              <HarvestTable />
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-2">
              <div>
                <HarvestOverview />
              </div>
              <div>
                <StorageOverview />
              </div>
            </div>
          </div>

          <aside className="hidden xl:flex w-80 flex-col gap-5 p-6 bg-white border-l">
            <Notifications />
            <HarvestOverview />
            <StorageOverview />
          </aside>
        </div>
      </div>
    </div>
  );
}
