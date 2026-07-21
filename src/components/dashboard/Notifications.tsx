import type { ReactElement } from "react";
import {
  Bell,
  ShoppingCart,
  Package,
  Truck,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";

interface NotificationItem {
  id: number;
  title: string;
  message: string;
  time: string;
  icon: LucideIcon;
  color: string;
  unread: boolean;
}

const notifications: NotificationItem[] = [
  {
    id: 1,
    title: "New Buyer Request",
    message: "FreshMart wants 500kg of Tomatoes.",
    time: "5 mins ago",
    icon: ShoppingCart,
    color: "bg-green-100 text-green-700",
    unread: true,
  },
  {
    id: 2,
    title: "Harvest Added",
    message: "You added 250kg of Peppers.",
    time: "25 mins ago",
    icon: Package,
    color: "bg-orange-100 text-orange-700",
    unread: true,
  },
  {
    id: 3,
    title: "Delivery Update",
    message: "Your shipment has left the warehouse.",
    time: "1 hour ago",
    icon: Truck,
    color: "bg-blue-100 text-blue-700",
    unread: false,
  },
  {
    id: 4,
    title: "Payment Received",
    message: "₦450,000 has been credited.",
    time: "Yesterday",
    icon: CheckCircle,
    color: "bg-emerald-100 text-emerald-700",
    unread: false,
  },
];

export default function Notifications(): ReactElement {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell className="text-green-700" size={20} />
          <h2 className="text-lg font-semibold text-gray-800">
            Notifications
          </h2>
        </div>

        <button className="text-sm font-medium text-green-700 hover:underline">
          View all
        </button>
      </div>

      {/* Notification List */}
      <div className="space-y-4">
        {notifications.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex items-start gap-4 rounded-2xl p-3 transition hover:bg-gray-50"
            >
              {/* Icon */}
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.color}`}
              >
                <Icon size={20} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-800">
                    {item.title}
                  </h3>

                  {item.unread && (
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
                  )}
                </div>

                <p className="mt-1 text-sm text-gray-500">
                  {item.message}
                </p>

                <p className="mt-2 text-xs text-gray-400">
                  {item.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}