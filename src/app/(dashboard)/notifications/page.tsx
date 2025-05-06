"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { assets } from "@/assets/data/assets";
import Image from "next/image";
import Header from "@/components/layout/Header";

function NotificationPage() {
  return (
    <>
      <Header
        title="Notifications"
        description="Read and delete notifications."
      />
      <div className="mx-auto rounded-lg bg-white p-6 shadow-sm">
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold">Today</h2>
          <div className="space-y-4">
            {/* Activity Item 1 */}
            <div className="flex items-start gap-3 rounded p-3 hover:bg-gray-50">
              <Checkbox className="mt-1" />
              <Image src={assets.avatar} alt="" />
              <div className="flex-1">
                <p className="text-gray-800">
                  Your payment invoice request has been approved by Admin
                </p>
                <p className="text-sm text-gray-500">3min ago</p>
              </div>
            </div>

            {/* Activity Item 2 */}
            <div className="flex items-start gap-3 rounded p-3 hover:bg-gray-50">
              <Checkbox className="mt-1" />
              <Image src={assets.avatar} alt="" />
              <div className="flex-1">
                <p className="text-gray-800">
                  Your payment invoice request has been approved by Admin
                </p>
                <p className="text-sm text-gray-500">10min ago</p>
              </div>
            </div>

            {/* Activity Item 3 */}
            <div className="flex items-start gap-3 rounded p-3 hover:bg-gray-50">
              <Checkbox className="mt-1" />
              <Image src={assets.avatar} alt="" />
              <div className="flex-1">
                <p className="text-gray-800">
                  Your payment invoice request has been approved by Admin
                </p>
                <p className="text-sm text-gray-500">1hr ago</p>
              </div>
            </div>

            {/* Activity Item 4 */}
            <div className="flex items-start gap-3 rounded p-3 hover:bg-gray-50">
              <Checkbox className="mt-1" />
              <Image src={assets.avatar} alt="" />
              <div className="flex-1">
                <p className="text-gray-800">
                  Your payment invoice request has been approved by Admin
                </p>
                <p className="text-sm text-gray-500">5hr ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-200"></div>

        {/* Yesterday's Activities */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold">
            Yesterday 18th November, 2022
          </h2>
          <div className="space-y-4">
            {/* Activity Item 5 */}
            <div className="flex items-start gap-3 rounded p-3 hover:bg-gray-50">
              <Checkbox className="mt-1" />
              <Image src={assets.avatar} alt="" />
              <div className="flex-1">
                <p className="text-gray-800">
                  Your payment invoice request has been approved by Admin
                </p>
                <p className="text-sm text-gray-500">1day ago</p>
              </div>
            </div>

            {/* Activity Item 6 */}
            <div className="flex items-start gap-3 rounded p-3 hover:bg-gray-50">
              <Checkbox className="mt-1" />
              <Image src={assets.avatar} alt="" />
              <div className="flex-1">
                <p className="text-gray-800">
                  Your payment invoice request has been approved by Admin
                </p>
                <p className="text-sm text-gray-500">1day ago</p>
              </div>
            </div>

            {/* Activity Item 7 */}
            <div className="flex items-start gap-3 rounded p-3 hover:bg-gray-50">
              <Checkbox className="mt-1" />
              <Image src={assets.avatar} alt="" />
              <div className="flex-1">
                <p className="text-gray-800">
                  Your payment invoice request has been approved by Admin
                </p>
                <p className="text-sm text-gray-500">1day ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Select All */}
        <div className="mt-4 flex items-center gap-2">
          <Checkbox id="select-all" />
          <label
            htmlFor="select-all"
            className="cursor-pointer text-sm text-gray-600"
          >
            Select all
          </label>
        </div>
      </div>
    </>
  );
}

export default NotificationPage;
