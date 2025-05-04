"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "@/assets/data/data";
export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col bg-white shadow-lg">
      <div className="flex items-center justify-center border-b p-4">
        <h2 className="text-lg font-semibold text-blue-600">UiUxOtor</h2>
      </div>

      <nav className="flex-1 p-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 rounded-lg p-3 transition ${
              pathname.startsWith(item.href)
                ? "bg-blue-100 text-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-sm font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
