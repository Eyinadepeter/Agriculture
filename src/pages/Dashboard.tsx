import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import HarvestTable from "../components/dashboard/HarvestTable";
import MarketGrid from "../components/dashboard/MarketGrid";
import Notifications from "../components/dashboard/Notifications";
import HarvestOverview from "../components/dashboard/HarvestOverview";
import StorageOverview from "../components/dashboard/StorageOverview";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main */}
        <div className="flex-1 flex">
          <div className="flex-1 p-6">
            <Navbar />

            <div className="mt-6">
              <WelcomeBanner />
            </div>

            <div className="mt-6">
              <HarvestTable />
            </div>

            <div className="mt-6">
              <MarketGrid />
            </div>
          </div>

          {/* Right Sidebar */}
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