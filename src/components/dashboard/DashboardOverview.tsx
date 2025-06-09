import { TrendingUp, Package, ShoppingCart, DollarSign, AlertTriangle, Star, Users, Eye, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export const DashboardOverview = () => {
  const stats = [
    { title: "Total Products", value: "156", change: "+12%", icon: Package, color: "text-blue-600" },
    { title: "Pending Orders", value: "23", change: "+5%", icon: ShoppingCart, color: "text-orange-600" },
    { title: "Delivered Orders", value: "89", change: "+18%", icon: ShoppingCart, color: "text-green-600" },
    { title: "Total Sales", value: "$12,450", change: "+24%", icon: DollarSign, color: "text-purple-600" },
  ];

  const quickActions = [
    { title: "Add New Product", icon: Package },
    { title: "View Orders", icon: ShoppingCart },
    { title: "Update Store Profile", icon: Users },
    { title: "Check Analytics", icon: TrendingUp },
  ];

  const lowStockItems = [
    { name: "iPhone 13 Case", stock: 3, sku: "IP13-CASE-01" },
    { name: "Wireless Headphones", stock: 1, sku: "WH-SONY-02" },
    { name: "Phone Charger", stock: 5, sku: "CHG-USB-03" },
  ];

  const recentReviews = [
    { product: "Samsung Galaxy Case", rating: 5, review: "Excellent quality and fast delivery!", customer: "Ahmad Khan" },
    { product: "Bluetooth Speaker", rating: 4, review: "Good sound quality, recommended.", customer: "Sarah Ali" },
    { product: "Power Bank", rating: 5, review: "Long lasting battery, very satisfied.", customer: "Hassan Sheikh" },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="transition-transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                  </div>
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Revenue Chart Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>Revenue Chart</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Revenue chart will be displayed here</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-20 flex-col space-y-2 hover:bg-gray-50"
                  >
                    <Icon className="h-6 w-6" />
                    <span className="text-xs text-center">{action.title}</span>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Stock Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              <span>Low Stock Alerts</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">SKU: {item.sku}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-orange-600">{item.stock} left</p>
                    <Button size="sm" variant="outline" className="mt-1">
                      Restock
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Reviews */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-500" />
            <span>Recent Reviews</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentReviews.map((review, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-gray-900">{review.product}</p>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">"{review.review}"</p>
                <p className="text-xs text-gray-500">- {review.customer}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
