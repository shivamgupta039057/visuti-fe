'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import LeadManagement from './components/LeadManagement';

const DashboardPage = () => {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const getPageContent = () => {
    const contentMap = {
      '/dashboard': {
        title: 'Dashboard',
        description: 'Welcome to your admin dashboard. Overview of all activities and statistics.'
      },
      '/dashboard/leads': {
        title: 'Lead Management',
        description: 'Manage and track all your leads. View, edit, and follow up with potential customers.'
      },
      '/dashboard/students': {
        title: 'Student Management',
        description: 'Manage student records, enrollments, and academic information.'
      },
      '/dashboard/roles': {
        title: 'Role Management',
        description: 'Configure user roles and permissions for your system.'
      },
      '/dashboard/chatbox': {
        title: 'Chatbox',
        description: 'Manage customer conversations and support tickets.'
      },
      '/dashboard/reports': {
        title: 'Reports',
        description: 'View detailed reports and analytics for your business.'
      },
      '/dashboard/colleges': {
        title: 'College Management',
        description: 'Manage college information, courses, and admissions.'
      },
      '/dashboard/courses': {
        title: 'Courses Management',
        description: 'Create, edit, and manage course offerings and curriculum.'
      },
      '/dashboard/results': {
        title: 'Result Management',
        description: 'View and manage student results and academic performance.'
      },
      '/dashboard/documents': {
        title: 'Document Management',
        description: 'Upload, organize, and manage all your documents and files.'
      },
      '/dashboard/cms': {
        title: 'CMS',
        description: 'Content Management System - Manage website content and pages.'
      },
      '/dashboard/staff': {
        title: 'Staff Management',
        description: 'Manage staff members, their roles, and responsibilities.'
      }
    };

    // Check for exact match first, then check for pathname starts with
    if (contentMap[pathname]) {
      return contentMap[pathname];
    }

    // Check for nested routes
    for (const [key, value] of Object.entries(contentMap)) {
      if (pathname?.startsWith(key) && key !== '/dashboard') {
        return value;
      }
    }

    // Default to dashboard
    return contentMap['/dashboard'];
  };

  const content = getPageContent();

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
              {/* Conditional Content Rendering */}
              {pathname === '/dashboard/leads' ? (
                <LeadManagement />
              ) : pathname === '/dashboard' ? (
                <>
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">{content.title}</h1>
                  <p className="text-gray-600">{content.description}</p>
                  
                  {/* Placeholder for future content */}
                  <div className="mt-6">
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <p className="text-sm text-gray-500">
                        Content for {content.title} will be displayed here.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">{content.title}</h1>
                  <p className="text-gray-600">{content.description}</p>
                  
                  {/* Placeholder for future content */}
                  <div className="mt-6">
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <p className="text-sm text-gray-500">
                        Content for {content.title} will be displayed here.
                      </p>
                    </div>
                  </div>
                </>
              )}
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

export default DashboardPage;

