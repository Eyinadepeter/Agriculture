import type { ReactElement } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";
import Notifications from "../components/dashboard/Notifications";

export default function Messages(): ReactElement {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex">
          <div className="flex-1 p-6">
            <Navbar />
            <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm">
              <h1 className="text-3xl font-semibold text-gray-800">Messages</h1>
              <p className="mt-2 text-sm text-gray-500">
                Stay connected with buyers, suppliers, and your team.
              </p>
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800">Inbox</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Open and respond to the latest messages from your network.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800">Alerts</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Configure which notifications should appear first.
                </p>
              </div>
            </div>
          </div>
          <aside className="hidden xl:flex w-80 flex-col gap-5 p-6 bg-white border-l">
            <Notifications />
          </aside>
        </div>
      </div>
    </div>
  );
}
