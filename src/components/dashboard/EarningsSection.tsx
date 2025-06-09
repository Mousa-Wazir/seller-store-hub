
import { DollarSign, TrendingUp, Download, CreditCard, Wallet, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export const EarningsSection = () => {
  const earnings = {
    total: 12450.75,
    paid: 8320.50,
    pending: 4130.25,
    thisMonth: 3250.80,
    lastMonth: 2890.40
  };

  const transactions = [
    { id: "TXN-001", amount: 89.99, status: "completed", date: "2024-06-09", method: "Bank Transfer" },
    { id: "TXN-002", amount: 156.50, status: "pending", date: "2024-06-08", method: "PayPal" },
    { id: "TXN-003", amount: 67.25, status: "completed", date: "2024-06-07", method: "JazzCash" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Earnings & Finance</h1>
          <p className="text-gray-600">Track your revenue and manage payouts</p>
        </div>
        <Button className="bg-gray-900 hover:bg-gray-800">
          <Download className="h-4 w-4 mr-2" />
          Download Statement
        </Button>
      </div>

      {/* Earnings Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                <p className="text-2xl font-bold text-gray-900">${earnings.total.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Paid Out</p>
                <p className="text-2xl font-bold text-gray-900">${earnings.paid.toLocaleString()}</p>
              </div>
              <Wallet className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900">${earnings.pending.toLocaleString()}</p>
              </div>
              <CreditCard className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-gray-900">${earnings.thisMonth.toLocaleString()}</p>
                <p className="text-sm text-green-600 font-medium flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  +12.5%
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payout Options */}
      <Card>
        <CardHeader>
          <CardTitle>Withdraw Funds</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <CreditCard className="h-6 w-6" />
              <span>Bank Transfer</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Wallet className="h-6 w-6" />
              <span>PayPal</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <DollarSign className="h-6 w-6" />
              <span>JazzCash</span>
            </Button>
          </div>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Available for withdrawal:</p>
            <p className="text-xl font-bold text-gray-900">${earnings.pending.toLocaleString()}</p>
            <Button className="mt-3 bg-gray-900 hover:bg-gray-800">
              Request Withdrawal
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{transaction.id}</p>
                  <p className="text-sm text-gray-600">{transaction.date} • {transaction.method}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">${transaction.amount}</p>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    transaction.status === "completed" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-orange-100 text-orange-800"
                  }`}>
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
