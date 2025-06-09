
import { Bell, Menu, User, LogOut, Search, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  pageTitle: string;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: (open: boolean) => void;
}

export const Header = ({ 
  pageTitle, 
  sidebarCollapsed, 
  setSidebarCollapsed,
  mobileSidebarOpen,
  setMobileSidebarOpen 
}: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-3 sm:px-4 lg:px-6 h-14 sm:h-16">
        {/* Left Section */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Desktop Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="hidden lg:flex"
          >
            <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="lg:hidden"
          >
            {mobileSidebarOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
          
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-gray-900 rounded-lg">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            <div className="font-bold text-lg sm:text-xl text-gray-900">LocalEna</div>
          </div>
        </div>

        {/* Center - Page Title (Hidden on mobile) */}
        <div className="hidden md:block">
          <h1 className="text-base lg:text-lg font-semibold text-gray-800 truncate max-w-xs lg:max-w-none">
            {pageTitle}
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Search - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent w-40 lg:w-auto"
              />
            </div>
            
            <div className="relative">
              <Bell className="h-5 w-5 text-gray-600 cursor-pointer hover:text-gray-900" />
              <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center p-0">
                3
              </Badge>
            </div>
          </div>

          {/* Mobile notifications */}
          <div className="relative md:hidden">
            <Bell className="h-5 w-5 text-gray-600 cursor-pointer hover:text-gray-900" />
            <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center p-0">
              3
            </Badge>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <Avatar className="h-7 w-7 sm:h-8 sm:w-8">
              <AvatarImage src="/placeholder-avatar.jpg" alt="Seller" />
              <AvatarFallback>
                <User className="h-3 w-3 sm:h-4 sm:w-4" />
              </AvatarFallback>
            </Avatar>
            <div className="hidden sm:block">
              <div className="text-sm font-medium text-gray-900">John Doe</div>
              <div className="text-xs text-gray-500">Premium Seller</div>
            </div>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-600 p-1 sm:p-2">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
