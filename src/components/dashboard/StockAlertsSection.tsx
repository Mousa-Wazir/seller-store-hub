
import { AlertTriangle, Package, Search, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const StockAlertsSection = () => {
  const lowStockItems = [
    { id: 1, name: "iPhone 13 Pro Case", sku: "IP13-CASE-001", currentStock: 3, threshold: 10, status: "critical" },
    { id: 2, name: "Wireless Headphones", sku: "WH-BT-002", currentStock: 8, threshold: 15, status: "low" },
    { id: 3, name: "USB-C Charger", sku: "CHG-USC-003", currentStock: 0, threshold: 20, status: "out" },
    { id: 4, name: "Bluetooth Speaker", sku: "BT-SPK-004", currentStock: 12, threshold: 25, status: "low" },
    { id: 5, name: "Phone Stand", sku: "PH-STD-005", currentStock: 2, threshold: 10, status: "critical" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical": return "destructive";
      case "low": return "secondary";
      case "out": return "outline";
      default: return "default";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "critical": return "Critical";
      case "low": return "Low Stock";
      case "out": return "Out of Stock";
      default: return "Normal";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Stock Alerts</h1>
          <p className="text-gray-600">Monitor low stock items and set custom thresholds</p>
        </div>
        <Button className="bg-gray-900 hover:bg-gray-800">
          <Settings className="h-4 w-4 mr-2" />
          Configure Alerts
        </Button>
      </div>

      {/* Alert Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Critical Items</p>
                <p className="text-2xl font-bold text-red-600">2</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Low Stock Items</p>
                <p className="text-2xl font-bold text-orange-600">2</p>
              </div>
              <Package className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Out of Stock</p>
                <p className="text-2xl font-bold text-gray-600">1</p>
              </div>
              <Package className="h-8 w-8 text-gray-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Products</p>
                <p className="text-2xl font-bold text-gray-900">156</p>
              </div>
              <Package className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stock Alerts Table */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Low Stock Items</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Product</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">SKU</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Current Stock</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Threshold</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {lowStockItems.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-600">{item.sku}</td>
                    <td className="py-4 px-4">
                      <span className={`font-medium ${
                        item.currentStock === 0 ? 'text-red-600' :
                        item.currentStock <= 5 ? 'text-orange-600' : 'text-gray-900'
                      }`}>
                        {item.currentStock}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-600">{item.threshold}</td>
                    <td className="py-4 px-4">
                      <Badge variant={getStatusColor(item.status)}>
                        {getStatusText(item.status)}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          Restock
                        </Button>
                        <Button size="sm" variant="outline">
                          Edit Threshold
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Alert Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Alert Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Default Low Stock Threshold
              </label>
              <input
                type="number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                defaultValue="10"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Notifications
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900">
                <option>Immediate</option>
                <option>Daily Digest</option>
                <option>Weekly Summary</option>
                <option>Disabled</option>
              </select>
            </div>
          </div>
          <Button className="mt-4 bg-gray-900 hover:bg-gray-800">
            Save Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
