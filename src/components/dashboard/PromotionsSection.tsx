
import { useState } from "react";
import { Tags, Plus, Search, Filter, Calendar, Percent, Gift } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const PromotionsSection = () => {
  const coupons = [
    { id: "SAVE20", discount: "20%", type: "Percentage", uses: 45, maxUses: 100, status: "active", expires: "2024-07-15" },
    { id: "FLAT50", discount: "$50", type: "Fixed", uses: 12, maxUses: 50, status: "active", expires: "2024-06-30" },
    { id: "SUMMER25", discount: "25%", type: "Percentage", uses: 89, maxUses: 200, status: "active", expires: "2024-08-31" },
    { id: "WELCOME10", discount: "10%", type: "Percentage", uses: 234, maxUses: 500, status: "paused", expires: "2024-12-31" },
  ];

  const flashSales = [
    { id: 1, product: "Wireless Headphones", originalPrice: 99.99, salePrice: 79.99, discount: "20%", sales: 23, timeLeft: "2d 5h" },
    { id: 2, product: "Phone Case Bundle", originalPrice: 49.99, salePrice: 29.99, discount: "40%", sales: 67, timeLeft: "1d 12h" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Promotions & Coupons</h1>
          <p className="text-gray-600">Create and manage promotional campaigns</p>
        </div>
        <Button className="bg-gray-900 hover:bg-gray-800">
          <Plus className="h-4 w-4 mr-2" />
          Create Promotion
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Coupons</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
              <Tags className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Uses</p>
                <p className="text-2xl font-bold text-gray-900">380</p>
              </div>
              <Gift className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Discount Given</p>
                <p className="text-2xl font-bold text-gray-900">$2,450</p>
              </div>
              <Percent className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Flash Sales</p>
                <p className="text-2xl font-bold text-gray-900">2</p>
              </div>
              <Calendar className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Promotion Tabs */}
      <Tabs defaultValue="coupons" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="coupons">Coupon Codes</TabsTrigger>
          <TabsTrigger value="flashsales">Flash Sales</TabsTrigger>
          <TabsTrigger value="bundles">Product Bundles</TabsTrigger>
        </TabsList>

        <TabsContent value="coupons" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Coupon Codes</CardTitle>
                <div className="flex space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Search coupons..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Code</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Discount</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Type</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Usage</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Expires</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coupons.map((coupon) => (
                      <tr key={coupon.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4 font-medium text-gray-900">{coupon.id}</td>
                        <td className="py-4 px-4 font-medium text-gray-900">{coupon.discount}</td>
                        <td className="py-4 px-4 text-gray-600">{coupon.type}</td>
                        <td className="py-4 px-4 text-gray-600">{coupon.uses}/{coupon.maxUses}</td>
                        <td className="py-4 px-4 text-gray-600">{coupon.expires}</td>
                        <td className="py-4 px-4">
                          <Badge variant={coupon.status === "active" ? "default" : "secondary"}>
                            {coupon.status}
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">Edit</Button>
                            <Button size="sm" variant="outline">
                              {coupon.status === "active" ? "Pause" : "Activate"}
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
        </TabsContent>

        <TabsContent value="flashsales" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Flash Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {flashSales.map((sale) => (
                  <div key={sale.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                      <div>
                        <h3 className="font-medium text-gray-900">{sale.product}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500 line-through">${sale.originalPrice}</span>
                          <span className="font-medium text-gray-900">${sale.salePrice}</span>
                          <Badge className="bg-red-100 text-red-800">{sale.discount} OFF</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{sale.sales} sales</p>
                      <p className="text-sm text-orange-600">{sale.timeLeft} left</p>
                      <Button size="sm" variant="outline" className="mt-2">Manage</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bundles" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Bundles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Gift className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No product bundles created yet</p>
                <Button className="mt-4">Create Bundle</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
