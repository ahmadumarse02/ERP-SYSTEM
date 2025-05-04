"use client";

import Image from "next/image";
import { useState } from "react";
import { LogOut, Settings, User, ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import avatar from "@/assets/assets/avatar.jpg";

interface HeaderProps {
  title: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between py-6">
      <div>
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-sm text-[#262626]">{description}</p>
      </div>
      <div className="relative flex items-center gap-2 rounded-lg p-2 transition hover:bg-gray-100">
        <Image src={avatar} alt="User Avatar" width={40} height={40} className="rounded-full" />
        <div className="text-left">
          <p className="text-sm font-medium">Otor John</p>
          <p className="text-xs text-gray-500">HR Office</p>
        </div>

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              className="rounded-md p-2 transition hover:bg-gray-200"
              onClick={() => setOpen(!open)}
            >
              <ChevronDown className="h-4 w-4" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-48 rounded-lg bg-white p-2 shadow-lg">
            <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100">
              <User className="h-4 w-4" />
              Profile
            </button>
            <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100">
              <Settings className="h-4 w-4" />
              Settings
            </button>
            <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-red-500 hover:bg-gray-100">
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
