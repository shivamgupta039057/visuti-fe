'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Clock, 
  Users, 
  GraduationCap, 
  UserCog, 
  MessageSquare, 
  FileText, 
  BookOpen, 
  Grid3x3,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const sidebarMenuItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: Clock,
    href: '/dashboard'
  },
  {
    id: 'lead-management',
    label: 'Lead Management',
    icon: Users,
    href: '/dashboard/leads'
  },
  {
    id: 'student-management',
    label: 'Student Management',
    icon: GraduationCap,
    href: '/dashboard/students'
  },
  {
    id: 'role-management',
    label: 'Role Management',
    icon: UserCog,
    href: '/dashboard/roles'
  },
  {
    id: 'chatbox',
    label: 'Chatbox',
    icon: MessageSquare,
    href: '/dashboard/chatbox'
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: FileText,
    href: '/dashboard/reports'
  },
  {
    id: 'college-management',
    label: 'College Management',
    icon: BookOpen,
    href: '/dashboard/colleges'
  },
  {
    id: 'courses-management',
    label: 'Courses Management',
    icon: GraduationCap,
    href: '/dashboard/courses'
  },
  {
    id: 'result-management',
    label: 'Result Management',
    icon: FileText,
    href: '/dashboard/results'
  },
  {
    id: 'document-management',
    label: 'Document Management',
    icon: FileText,
    href: '/dashboard/documents'
  },
  {
    id: 'cms',
    label: 'CMS',
    icon: Users,
    href: '/dashboard/cms'
  },
  {
    id: 'staff-management',
    label: 'Staff Management',
    icon: Grid3x3,
    href: '/dashboard/staff'
  }
];

const Sidebar = ({ isMobileOpen, setIsMobileOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const isActive = (href) => {
    if (href === '/dashboard') {
      return pathname === '/dashboard';
    }
    return pathname?.startsWith(href);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:absolute top-0 left-0 h-full bg-white transition-all duration-300 z-50 lg:z-20 p-[12.5px] [box-shadow:0px_1px_4px_0px_#00000040] flex flex-col space-y-4 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${
          isMobileOpen ? 'w-64' : isExpanded ? 'w-64 lg:w-64' : 'w-[75px] lg:w-[75px]'
        }`}
      >
      {/* Logo & Close Button (Mobile) */}
      <div className="flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img
            src="/Logo.png"
            alt="logo"
            className="size-full transition duration-300 group-hover:invert group-hover:contrast-[7.5] group-[.active]:invert group-[.active]:contrast-[7.5] h-10 w-auto"
          />
        </a>
        {/* Mobile Close Button */}
        <button
          onClick={() => setIsMobileOpen(false)}
          className="lg:hidden p-1 rounded hover:bg-gray-100"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Sidebar Items */}
      <div className="relative flex-1 overflow-y-auto no-scrollbar z-[10000]">
        <div className="flex flex-col space-y-2">
          {sidebarMenuItems.map((item) => {
            const IconComponent = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={`group sidebar-item flex transition duration-300 items-center space-x-2 px-3.5 sm:h-12 h-11 rounded-[10px] ${
                  active
                    ? 'bg-[#9333EA] text-white'
                    : 'bg-transparent text-[#4B4743] hover:bg-gray-100'
                } ${
                  isMobileOpen || isExpanded ? 'justify-start' : 'justify-center'
                }`}
              >
                <span className="flex items-center justify-center sm:size-5 size-4">
                  <IconComponent 
                    className={`size-5 transition duration-300 ${
                      active
                        ? 'text-white'
                        : 'text-[#4B4743] group-hover:text-[#9333EA]'
                    }`}
                  />
                </span>
                <span
                  className={`label sm:text-base text-sm ml-2 ${
                    isMobileOpen || isExpanded ? 'block' : 'hidden'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Toggle Button - Desktop Only */}
      <button
        onClick={toggleSidebar}
        className="hidden lg:flex bg-white w-6 h-6 transition duration-300 hover:bg-[#E0FFEF] rounded-full absolute -right-3 top-16 border border-[#E2E8F0] items-center justify-center shadow-sm z-50"
        aria-label="Toggle sidebar"
      >
        {isExpanded ? (
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        ) : (
          <ChevronRight className="w-4 h-4 text-gray-600" />
        )}
      </button>
    </div>
    </>
  );
};

export default Sidebar;


