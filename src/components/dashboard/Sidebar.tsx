
import { 
  Home, Package, ShoppingCart, Users, MessageSquare, DollarSign, 
  BarChart3, Tags, Star, AlertTriangle, HelpCircle, Settings,
  CalendarDays
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  collapsed: boolean;
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: (open: boolean) => void;
}

export const Sidebar = ({ 
  activeTab, 
  setActiveTab, 
  collapsed, 
  mobileSidebarOpen, 
  setMobileSidebarOpen 
}: SidebarProps) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "products", label: "My Products", icon: Package },
    { id: "orders", label: "Orders", icon: ShoppingCart },
    { id: "rentals", label: "Rentals", icon: CalendarDays },
    { id: "customers", label: "Customers", icon: Users },
    { id: "messages", label: "Messages", icon: MessageSquare },
    { id: "earnings", label: "Earnings", icon: DollarSign },
    { id: "sales", label: "Sales Report", icon: BarChart3 },
    { id: "promotions", label: "Promotions & Coupons", icon: Tags },
    { id: "reviews", label: "Reviews & Ratings", icon: Star },
    { id: "alerts", label: "Stock Alerts", icon: AlertTriangle },
    { id: "support", label: "Support & Help", icon: HelpCircle },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const handleItemClick = (itemId: string) => {
    setActiveTab(itemId);
    if (mobileSidebarOpen) {
      setMobileSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={cn(
        "hidden lg:block fixed top-16 left-0 h-full bg-white border-r border-gray-200 z-30 transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}>
        <nav className="p-2 space-y-1 h-full overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={cn(
                  "w-full flex items-center space-x-3 px-3 py-3 text-left rounded-lg transition-colors text-sm font-medium",
                  activeTab === item.id
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                  collapsed && "justify-center"
                )}
                title={collapsed ? item.label : undefined}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <aside className={cn(
        "lg:hidden fixed top-16 left-0 h-full bg-white border-r border-gray-200 z-30 transition-transform duration-300 w-64",
        mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <nav className="p-2 space-y-1 h-full overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={cn(
                  "w-full flex items-center space-x-3 px-3 py-3 text-left rounded-lg transition-colors text-sm font-medium",
                  activeTab === item.id
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
};
