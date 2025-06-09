
import { useState } from "react";
import { Users, Search, Filter, Mail, Phone, MapPin, Star, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const CustomerManagement = () => {
  const customers = [
    { 
      id: 1, 
      name: "Ahmad Khan", 
      email: "ahmad@email.com", 
      phone: "+92 300 1234567",
      location: "Karachi", 
      orders: 12, 
      totalSpent: 2450, 
      tag: "VIP",
      rating: 4.8,
      lastOrder: "2024-06-08"
    },
    { 
      id: 2, 
      name: "Sarah Ali", 
      email: "sarah@email.com", 
      phone: "+92 301 7654321",
      location: "Lahore", 
      orders: 3, 
      totalSpent: 890, 
      tag: "New",
      rating: 4.5,
      lastOrder: "2024-06-07"
    },
    { 
      id: 3, 
      name: "Hassan Sheikh", 
      email: "hassan@email.com", 
      phone: "+92 302 9876543",
      location: "Islamabad", 
      orders: 8, 
      totalSpent: 1650, 
      tag: "Frequent",
      rating: 4.9,
      lastOrder: "2024-06-09"
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Customer Management</h1>
          <p className="text-gray-600">Manage your customer relationships and data</p>
        </div>
        <Button className="bg-gray-900 hover:bg-gray-800">
          Export Customer Data
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Customers</p>
                <p className="text-2xl font-bold text-gray-900">245</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">VIP Customers</p>
                <p className="text-2xl font-bold text-gray-900">18</p>
              </div>
              <Star className="h-8 w-8 text-gold-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">New This Month</p>
                <p className="text-2xl font-bold text-gray-900">32</p>
              </div>
              <Tag className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Rating</p>
                <p className="text-2xl font-bold text-gray-900">4.7</p>
              </div>
              <Star className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Customer List */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Customer List</CardTitle>
            <div className="flex space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search customers..."
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
          <div className="space-y-4">
            {customers.map((customer) => (
              <div key={customer.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>{customer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-medium text-gray-900">{customer.name}</h3>
                      <Badge variant={
                        customer.tag === "VIP" ? "default" :
                        customer.tag === "New" ? "secondary" : "outline"
                      }>
                        {customer.tag}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Mail className="h-3 w-3 mr-1" />
                        {customer.email}
                      </span>
                      <span className="flex items-center">
                        <Phone className="h-3 w-3 mr-1" />
                        {customer.phone}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {customer.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Orders</p>
                      <p className="font-medium">{customer.orders}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Total Spent</p>
                      <p className="font-medium">${customer.totalSpent}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Rating</p>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="font-medium ml-1">{customer.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 space-x-2">
                    <Button size="sm" variant="outline">View Orders</Button>
                    <Button size="sm" variant="outline">Message</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
