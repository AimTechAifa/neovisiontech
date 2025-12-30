// src/components/Layout.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { AnimatedBackground } from "./ui";
import { Toaster } from "sonner";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-white transition-colors duration-300">
      <AnimatedBackground />
      <Header />
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="bottom-right" theme="system" />
    </div>
  );
};

export default Layout;