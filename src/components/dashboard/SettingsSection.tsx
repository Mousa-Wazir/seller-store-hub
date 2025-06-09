
import { useState } from "react";
import { User, Store, Bell, CreditCard, Globe, Shield, Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const SettingsSection = () => {
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    stockAlerts: true,
    paymentUpdates: true,
    newMessages: true,
    promotions: false,
    weeklyReport: true
  });

  return (
    <div className="space-y-4 sm:space-y-6 p-3 sm:p-4 lg:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 text-sm sm:text-base">Manage your account and store preferences</p>
        </div>
      </div>

      {/* Settings Tabs */}
      <Tabs defaultValue="profile" className="space-y-4 sm:space-y-6">
        <div className="w-full overflow-x-auto">
          <TabsList className="grid w-full grid-cols-6 min-w-[600px] lg:min-w-0">
            <TabsTrigger value="profile" className="text-xs sm:text-sm px-1 sm:px-2">Profile</TabsTrigger>
            <TabsTrigger value="store" className="text-xs sm:text-sm px-1 sm:px-2">Store Info</TabsTrigger>
            <TabsTrigger value="notifications" className="text-xs sm:text-sm px-1 sm:px-2">Notifications</TabsTrigger>
            <TabsTrigger value="payments" className="text-xs sm:text-sm px-1 sm:px-2">Payments</TabsTrigger>
            <TabsTrigger value="preferences" className="text-xs sm:text-sm px-1 sm:px-2">Preferences</TabsTrigger>
            <TabsTrigger value="security" className="text-xs sm:text-sm px-1 sm:px-2">Security</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="profile" className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg sm:text-xl">
                <User className="h-5 w-5 mr-2" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
                <Avatar className="h-16 w-16 sm:h-20 sm:w-20">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
                  <AvatarFallback>
                    <User className="h-6 w-6 sm:h-8 sm:w-8" />
                  </AvatarFallback>
                </Avatar>
                <div className="text-center sm:text-left">
                  <Button variant="outline" className="text-sm sm:text-base">Change Photo</Button>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">JPG, PNG or GIF. Max size 2MB</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                    defaultValue="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                    defaultValue="Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                    defaultValue="john.doe@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                    defaultValue="+92 300 1234567"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <textarea
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                    defaultValue="123 Business Street, Karachi, Pakistan"
                  ></textarea>
                </div>
              </div>
              
              <Button className="mt-6 bg-gray-900 hover:bg-gray-800 w-full sm:w-auto">
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="store" className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg sm:text-xl">
                <Store className="h-5 w-5 mr-2" />
                Store Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Store Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                    defaultValue="John's Electronics Store"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Store Description
                  </label>
                  <textarea
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                    defaultValue="Quality electronics and accessories with fast delivery and excellent customer service."
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Store Logo
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <p className="text-gray-500 text-sm sm:text-base">Click to upload logo</p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Store Banner
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <p className="text-gray-500 text-sm sm:text-base">Click to upload banner</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business License
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                      placeholder="Enter license number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tax ID (NTN/GSTIN)
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                      placeholder="Enter tax ID"
                    />
                  </div>
                </div>
              </div>
              
              <Button className="mt-6 bg-gray-900 hover:bg-gray-800 w-full sm:w-auto">
                <Save className="h-4 w-4 mr-2" />
                Update Store Info
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg sm:text-xl">
                <Bell className="h-5 w-5 mr-2" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between py-2">
                  <div className="flex-1 pr-4">
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base">Order Updates</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Get notified when you receive new orders</p>
                  </div>
                  <Switch
                    checked={notifications.orderUpdates}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, orderUpdates: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between py-2">
                  <div className="flex-1 pr-4">
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base">Stock Alerts</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Receive alerts when products are low in stock</p>
                  </div>
                  <Switch
                    checked={notifications.stockAlerts}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, stockAlerts: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between py-2">
                  <div className="flex-1 pr-4">
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base">Payment Updates</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Get notified about payment confirmations</p>
                  </div>
                  <Switch
                    checked={notifications.paymentUpdates}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, paymentUpdates: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between py-2">
                  <div className="flex-1 pr-4">
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base">New Messages</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Receive notifications for new customer messages</p>
                  </div>
                  <Switch
                    checked={notifications.newMessages}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, newMessages: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between py-2">
                  <div className="flex-1 pr-4">
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base">Promotional Offers</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Receive updates about platform promotions</p>
                  </div>
                  <Switch
                    checked={notifications.promotions}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, promotions: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between py-2">
                  <div className="flex-1 pr-4">
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base">Weekly Reports</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Get weekly sales and performance reports</p>
                  </div>
                  <Switch
                    checked={notifications.weeklyReport}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, weeklyReport: checked }))
                    }
                  />
                </div>
              </div>
              
              <Button className="mt-6 bg-gray-900 hover:bg-gray-800 w-full sm:w-auto">
                <Save className="h-4 w-4 mr-2" />
                Save Preferences
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg sm:text-xl">
                <CreditCard className="h-5 w-5 mr-2" />
                Payment Setup
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Payment Method
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base">
                    <option>Bank Transfer</option>
                    <option>JazzCash</option>
                    <option>EasyPaisa</option>
                    <option>PayPal</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Account Holder Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                      placeholder="Enter account holder name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Account Number
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                      placeholder="Enter account number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                      placeholder="Enter bank name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Branch Code
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                      placeholder="Enter branch code"
                    />
                  </div>
                </div>
              </div>
              
              <Button className="mt-6 bg-gray-900 hover:bg-gray-800 w-full sm:w-auto">
                <Save className="h-4 w-4 mr-2" />
                Save Payment Info
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg sm:text-xl">
                <Globe className="h-5 w-5 mr-2" />
                General Preferences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Language
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base">
                      <option>English</option>
                      <option>اردو (Urdu)</option>
                      <option>हिंदी (Hindi)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Timezone
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base">
                      <option>PKT (UTC+5)</option>
                      <option>IST (UTC+5:30)</option>
                      <option>GMT (UTC+0)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Currency
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base">
                      <option>PKR (Pakistani Rupee)</option>
                      <option>USD (US Dollar)</option>
                      <option>INR (Indian Rupee)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Theme
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base">
                      <option>Light</option>
                      <option>Dark</option>
                      <option>Auto</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <Button className="mt-6 bg-gray-900 hover:bg-gray-800 w-full sm:w-auto">
                <Save className="h-4 w-4 mr-2" />
                Save Preferences
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg sm:text-xl">
                <Shield className="h-5 w-5 mr-2" />
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-4 text-sm sm:text-base">Change Password</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Password
                      </label>
                      <input
                        type="password"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-medium text-gray-900 mb-4 text-sm sm:text-base">Two-Factor Authentication</h4>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
                    <div>
                      <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                    </div>
                    <Button variant="outline" className="w-full sm:w-auto">Enable 2FA</Button>
                  </div>
                </div>
              </div>
              
              <Button className="mt-6 bg-gray-900 hover:bg-gray-800 w-full sm:w-auto">
                <Save className="h-4 w-4 mr-2" />
                Update Security
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
