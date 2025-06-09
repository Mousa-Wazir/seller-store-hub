
import { useState } from "react";
import { Header } from "@/components/dashboard/Header";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { ProductManagement } from "@/components/dashboard/ProductManagement";
import { OrderManagement } from "@/components/dashboard/OrderManagement";
import { RentalManagement } from "@/components/dashboard/RentalManagement";
import { CustomerManagement } from "@/components/dashboard/CustomerManagement";
import { EarningsSection } from "@/components/dashboard/EarningsSection";
import { MessagesSection } from "@/components/dashboard/MessagesSection";
import { SalesReportSection } from "@/components/dashboard/SalesReportSection";
import { PromotionsSection } from "@/components/dashboard/PromotionsSection";
import { ReviewsSection } from "@/components/dashboard/ReviewsSection";
import { StockAlertsSection } from "@/components/dashboard/StockAlertsSection";
import { SupportSection } from "@/components/dashboard/SupportSection";
import { SettingsSection } from "@/components/dashboard/SettingsSection";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const getPageTitle = () => {
    const titles = {
      dashboard: "Dashboard Overview",
      products: "My Products",
      orders: "Order Management",
      rentals: "Rental Management",
      customers: "Customer Management",
      messages: "Messages & Communication",
      earnings: "Earnings & Finance",
      sales: "Sales Reports",
      promotions: "Promotions & Coupons",
      reviews: "Reviews & Ratings",
      alerts: "Stock Alerts",
      support: "Support & Help",
      settings: "Settings"
    };
    return titles[activeTab] || "Dashboard";
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview />;
      case "products":
        return <ProductManagement />;
      case "orders":
        return <OrderManagement />;
      case "rentals":
        return <RentalManagement />;
      case "customers":
        return <CustomerManagement />;
      case "messages":
        return <MessagesSection />;
      case "earnings":
        return <EarningsSection />;
      case "sales":
        return <SalesReportSection />;
      case "promotions":
        return <PromotionsSection />;
      case "reviews":
        return <ReviewsSection />;
      case "alerts":
        return <StockAlertsSection />;
      case "support":
        return <SupportSection />;
      case "settings":
        return <SettingsSection />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        pageTitle={getPageTitle()}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
        mobileSidebarOpen={mobileSidebarOpen}
        setMobileSidebarOpen={setMobileSidebarOpen}
      />
      
      <div className="flex relative">
        <Sidebar 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          collapsed={sidebarCollapsed}
          mobileSidebarOpen={mobileSidebarOpen}
          setMobileSidebarOpen={setMobileSidebarOpen}
        />
        
        {/* Mobile overlay */}
        {mobileSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={() => setMobileSidebarOpen(false)}
          />
        )}
        
        <main className={`flex-1 pt-16 p-3 sm:p-4 lg:p-6 transition-all duration-300 ${
          sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'
        } ml-0`}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;
