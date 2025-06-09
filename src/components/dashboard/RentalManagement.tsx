import { useState } from "react";
import { CalendarDays, Package, Clock, DollarSign, FileText, Bell, Plus, Search, Filter, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const RentalManagement = () => {
  const [activeRentalTab, setActiveRentalTab] = useState("products");

  const rentalProducts = [
    { id: 1, name: "Professional Camera", dailyRate: 50, weeklyRate: 300, available: true, category: "Electronics" },
    { id: 2, name: "Wedding Decoration Set", dailyRate: 150, weeklyRate: 900, available: false, category: "Events" },
    { id: 3, name: "Power Tools Kit", dailyRate: 25, weeklyRate: 150, available: true, category: "Tools" },
  ];

  const rentalBookings = [
    { id: "R001", product: "Professional Camera", customer: "Ahmad Ali", startDate: "2024-06-10", endDate: "2024-06-15", status: "active", deposit: 200 },
    { id: "R002", product: "Wedding Decoration Set", customer: "Sarah Khan", startDate: "2024-06-08", endDate: "2024-06-09", status: "completed", deposit: 500 },
    { id: "R003", product: "Power Tools Kit", customer: "Hassan Sheikh", startDate: "2024-06-12", endDate: "2024-06-14", status: "pending", deposit: 100 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Rental Management</h1>
          <p className="text-gray-600">Manage your rental products and bookings</p>
        </div>
        <Button className="bg-gray-900 hover:bg-gray-800">
          <Plus className="h-4 w-4 mr-2" />
          Add Rental Product
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Rental Products</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <Package className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Rentals</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
              <CalendarDays className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Returns</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                <p className="text-2xl font-bold text-gray-900">$2,450</p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Rental Tabs */}
      <Tabs value={activeRentalTab} onValueChange={setActiveRentalTab}>
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="returns">Returns</TabsTrigger>
          <TabsTrigger value="terms">Terms</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="notifications">Alerts</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>My Rentable Products</CardTitle>
                <div className="flex space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Search products..."
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
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Product</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Category</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Daily Rate</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Weekly Rate</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rentalProducts.map((product) => (
                      <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4 font-medium text-gray-900">{product.name}</td>
                        <td className="py-4 px-4 text-gray-600">{product.category}</td>
                        <td className="py-4 px-4 font-medium text-gray-900">${product.dailyRate}/day</td>
                        <td className="py-4 px-4 font-medium text-gray-900">${product.weeklyRate}/week</td>
                        <td className="py-4 px-4">
                          <Badge variant={product.available ? "default" : "secondary"}>
                            {product.available ? "Available" : "Rented"}
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          <Button size="sm" variant="outline">Edit</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bookings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Rental Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Booking ID</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Product</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Customer</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Duration</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Deposit</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rentalBookings.map((booking) => (
                      <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4 font-medium text-gray-900">{booking.id}</td>
                        <td className="py-4 px-4 text-gray-600">{booking.product}</td>
                        <td className="py-4 px-4 text-gray-600">{booking.customer}</td>
                        <td className="py-4 px-4 text-gray-600">{booking.startDate} - {booking.endDate}</td>
                        <td className="py-4 px-4 font-medium text-gray-900">${booking.deposit}</td>
                        <td className="py-4 px-4">
                          <Badge variant={
                            booking.status === "active" ? "default" :
                            booking.status === "completed" ? "secondary" : "outline"
                          }>
                            {booking.status}
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex space-x-2">
                            {booking.status === "pending" && (
                              <>
                                <Button size="sm" variant="outline">Approve</Button>
                                <Button size="sm" variant="outline">Reject</Button>
                              </>
                            )}
                            {booking.status === "active" && (
                              <Button size="sm" variant="outline">Mark Returned</Button>
                            )}
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

        <TabsContent value="returns" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Return & Deposit Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No pending returns at the moment</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="terms" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Rental Terms & Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Late Fee (per day)</label>
                  <input type="number" className="w-full p-2 border border-gray-300 rounded-lg" defaultValue="10" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Damage Fee (%)</label>
                  <input type="number" className="w-full p-2 border border-gray-300 rounded-lg" defaultValue="50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rental Period (days)</label>
                  <input type="number" className="w-full p-2 border border-gray-300 rounded-lg" defaultValue="1" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Maximum Rental Period (days)</label>
                  <input type="number" className="w-full p-2 border border-gray-300 rounded-lg" defaultValue="30" />
                </div>
              </div>
              <Button className="bg-gray-900 hover:bg-gray-800">Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Rental Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Rental analytics will be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="invoices" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Rental Invoices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No rental invoices available</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Rental Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <Bell className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">New rental booking</p>
                    <p className="text-sm text-gray-600">Professional Camera booked by Ahmad Ali</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
                  <Clock className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="font-medium text-gray-900">Return due tomorrow</p>
                    <p className="text-sm text-gray-600">Wedding Decoration Set needs to be returned</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
