"use client";

import { ChatArea } from "@/app/_components/chat-area";
import { Sidebar } from "@/app/_components/sidebar";
import usersGlobalStore from "@/store/users-store";
import { Box } from "../_components/Box";

export default function Mechanic() {
  const { loggedInUserData }: any = usersGlobalStore();
  const user = loggedInUserData;

  return (
    <div className="w-full h-[89vh] bg-secondary rounded-xl lg:p-4 p-1 flex lg:gap-4 lg:pb-22">
      <div className="w-[325px] h-full hidden lg:flex rounded-l-lg">
        <Sidebar />
      </div>
      <div className="w-full h-full lg:mt-4">
        <ChatArea />
      </div>
    </div>
  );
}
