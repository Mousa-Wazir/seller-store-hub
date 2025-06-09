
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
    <div className="p-4 sm:p-6 max-w-full overflow-x-hidden">
      {/* Header Section - Fully Responsive */}
      <div className="flex flex-col space-y-4 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Rental Management</h1>
            <p className="text-sm sm:text-base text-gray-600">Manage your rental products and bookings</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            Add Rental Product
          </Button>
        </div>
      </div>

      {/* Stats Cards - Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <CardContent className="p-0">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-xs sm:text-sm font-medium text-gray-600">Total Products</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">12</p>
              </div>
              <Package className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="p-4">
          <CardContent className="p-0">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-xs sm:text-sm font-medium text-gray-600">Active Rentals</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">8</p>
              </div>
              <CalendarDays className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="p-4">
          <CardContent className="p-0">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-xs sm:text-sm font-medium text-gray-600">Pending Returns</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">3</p>
              </div>
              <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="p-4">
          <CardContent className="p-0">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-xs sm:text-sm font-medium text-gray-600">Monthly Revenue</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">$2,450</p>
              </div>
              <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Rental Tabs - Fully Responsive */}
      <Tabs value={activeRentalTab} onValueChange={setActiveRentalTab} className="w-full">
        {/* Tabs List - Horizontal Scroll on Mobile */}
        <div className="w-full mb-6">
          <div className="overflow-x-auto">
            <TabsList className="inline-flex h-10 items-center justify-start rounded-md bg-gray-100 p-1 text-gray-500 min-w-max">
              <TabsTrigger value="products" className="text-xs sm:text-sm whitespace-nowrap px-3 py-1.5">Products</TabsTrigger>
              <TabsTrigger value="bookings" className="text-xs sm:text-sm whitespace-nowrap px-3 py-1.5">Bookings</TabsTrigger>
              <TabsTrigger value="returns" className="text-xs sm:text-sm whitespace-nowrap px-3 py-1.5">Returns</TabsTrigger>
              <TabsTrigger value="terms" className="text-xs sm:text-sm whitespace-nowrap px-3 py-1.5">Terms</TabsTrigger>
              <TabsTrigger value="reports" className="text-xs sm:text-sm whitespace-nowrap px-3 py-1.5">Reports</TabsTrigger>
              <TabsTrigger value="invoices" className="text-xs sm:text-sm whitespace-nowrap px-3 py-1.5">Invoices</TabsTrigger>
              <TabsTrigger value="notifications" className="text-xs sm:text-sm whitespace-nowrap px-3 py-1.5">Alerts</TabsTrigger>
            </TabsList>
          </div>
        </div>

        {/* Products Tab */}
        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader className="pb-4">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
                <CardTitle className="text-lg sm:text-xl">My Rentable Products</CardTitle>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full lg:w-auto">
                  <div className="relative flex-1 sm:flex-none">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
                    />
                  </div>
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
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

              {/* Mobile/Tablet Cards */}
              <div className="lg:hidden space-y-4">
                {rentalProducts.map((product) => (
                  <Card key={product.id} className="p-4 border border-gray-200">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 text-sm sm:text-base">{product.name}</h3>
                          <p className="text-xs sm:text-sm text-gray-600 mt-1">{product.category}</p>
                        </div>
                        <Badge variant={product.available ? "default" : "secondary"} className="text-xs">
                          {product.available ? "Available" : "Rented"}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Daily:</span>
                          <span className="font-medium ml-1">${product.dailyRate}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Weekly:</span>
                          <span className="font-medium ml-1">${product.weeklyRate}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="w-full">Edit Product</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Bookings Tab */}
        <TabsContent value="bookings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Rental Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {rentalBookings.map((booking) => (
                  <Card key={booking.id} className="p-4 border border-gray-200">
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 text-sm sm:text-base">{booking.id}</h3>
                          <p className="text-xs sm:text-sm text-gray-600">{booking.product}</p>
                        </div>
                        <Badge variant={
                          booking.status === "active" ? "default" :
                          booking.status === "completed" ? "secondary" : "outline"
                        } className="text-xs self-start">
                          {booking.status}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-sm">
                        <p><span className="text-gray-600">Customer:</span> <span className="font-medium">{booking.customer}</span></p>
                        <p><span className="text-gray-600">Duration:</span> <span className="font-medium">{booking.startDate} - {booking.endDate}</span></p>
                        <p><span className="text-gray-600">Deposit:</span> <span className="font-medium">${booking.deposit}</span></p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        {booking.status === "pending" && (
                          <>
                            <Button size="sm" variant="outline" className="w-full sm:flex-1 text-xs">Approve</Button>
                            <Button size="sm" variant="outline" className="w-full sm:flex-1 text-xs">Reject</Button>
                          </>
                        )}
                        {booking.status === "active" && (
                          <Button size="sm" variant="outline" className="w-full text-xs">Mark Returned</Button>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Returns Tab */}
        <TabsContent value="returns" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Return & Deposit Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-sm sm:text-base">No pending returns at the moment</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Terms Tab */}
        <TabsContent value="terms" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Rental Terms & Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Late Fee (per day)</label>
                  <input 
                    type="number" 
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    defaultValue="10" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Damage Fee (%)</label>
                  <input 
                    type="number" 
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    defaultValue="50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Min Rental Period (days)</label>
                  <input 
                    type="number" 
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    defaultValue="1" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Max Rental Period (days)</label>
                  <input 
                    type="number" 
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    defaultValue="30" 
                  />
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reports Tab */}
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Rental Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm sm:text-base">Rental analytics will be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Invoices Tab */}
        <TabsContent value="invoices" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Rental Invoices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-sm sm:text-base">No rental invoices available</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Rental Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <Bell className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 text-sm sm:text-base">New rental booking</p>
                    <p className="text-xs sm:text-sm text-gray-600 break-words">Professional Camera booked by Ahmad Ali</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg">
                  <Clock className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 text-sm sm:text-base">Return due tomorrow</p>
                    <p className="text-xs sm:text-sm text-gray-600 break-words">Wedding Decoration Set needs to be returned</p>
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
