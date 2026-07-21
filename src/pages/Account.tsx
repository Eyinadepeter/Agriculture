import type { ReactElement } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";
import Notifications from "../components/dashboard/Notifications";

export default function Account(): ReactElement {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex">
          <div className="flex-1 p-6">
            <Navbar />
            <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm">
              <h1 className="text-3xl font-semibold text-gray-800">Account</h1>
              <p className="mt-2 text-sm text-gray-500">
                Manage your profile, security settings, and billing information.
              </p>
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800">Profile</h2>
                <p className="mt-2 text-sm text-gray-500">
                  User name, contact details, and role management.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800">Security</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Update your password, two-factor authentication, and access.
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
