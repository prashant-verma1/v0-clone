import { onBoardUser } from "@/module/auth/action";
import React from "react";
import Navbar from "@/module/home/components/navbar.jsx";

const layout = async ({ children }) => {
  await onBoardUser();
  return (
    <main className="flex flex-col min-h-screen relative overflow-x-hidden">
      <Navbar/>
      <div className="fixed inset-0 -z-10 h-full bg-background dark:bg-[#0F172A]" />
      <div className="flex-1 w-full mt-20">{children}</div>
    </main>
  );
};

export default layout;
