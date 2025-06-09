
import { useState } from "react";
import { Header } from "@/components/dashboard/Header";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { ProductManagement } from "@/components/dashboard/ProductManagement";
import { OrderManagement } from "@/components/dashboard/OrderManagement";
import { EarningsSection } from "@/components/dashboard/EarningsSection";
import { MessagesSection } from "@/components/dashboard/MessagesSection";
import { SettingsSection } from "@/components/dashboard/SettingsSection";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview />;
      case "products":
        return <ProductManagement />;
      case "orders":
        return <OrderManagement />;
      case "earnings":
        return <EarningsSection />;
      case "messages":
        return <MessagesSection />;
      case "settings":
        return <SettingsSection />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      
      <div className="flex">
        <Sidebar 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        
        <main className="flex-1 lg:ml-64 pt-16 p-4 lg:p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;
