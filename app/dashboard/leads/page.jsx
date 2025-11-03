'use client';

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import LeadManagement from '../components/LeadManagement';

const LeadsPage = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-white">
      {/* Sidebar */}
      <Sidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />

      {/* Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden lg:ml-20">
        {/* Header */}
        <div className="w-full">
          <Header setIsMobileOpen={setIsMobileOpen} />
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-hidden">
          <section className="h-full flex-1 flex flex-col overflow-hidden p-2 sm:p-4">
            <div className="bg-white rounded-lg shadow-sm p-3 md:p-6 overflow-y-auto scrollable-items">
              <LeadManagement />
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 p-2 md:p-4">
        <div className="text-center text-xs md:text-sm text-gray-500">
          © 2024 Admin Panel. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LeadsPage;

