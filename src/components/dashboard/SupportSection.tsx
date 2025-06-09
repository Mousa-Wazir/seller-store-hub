
import { HelpCircle, MessageSquare, FileText, Send, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const SupportSection = () => {
  const tickets = [
    { id: "TKT-001", subject: "Payment not received", status: "open", priority: "high", created: "2024-06-08" },
    { id: "TKT-002", subject: "Product listing issue", status: "in-progress", priority: "medium", created: "2024-06-07" },
    { id: "TKT-003", subject: "Account verification", status: "resolved", priority: "low", created: "2024-06-05" },
  ];

  const faqs = [
    {
      question: "How do I add a new product?",
      answer: "Go to 'My Products' section and click 'Add New Product'. Fill in the required details including product name, description, price, and upload images."
    },
    {
      question: "When will I receive my payments?",
      answer: "Payments are processed weekly every Friday. You can track your earnings in the 'Earnings' section and request withdrawals."
    },
    {
      question: "How can I track my orders?",
      answer: "Visit the 'Orders' section to view all your orders. You can update order status, download invoices, and communicate with customers."
    },
    {
      question: "What are the commission rates?",
      answer: "Our commission rates vary by category and seller tier. Premium sellers get reduced commission rates. Check your dashboard for current rates."
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open": return "destructive";
      case "in-progress": return "secondary";
      case "resolved": return "default";
      default: return "outline";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "text-red-600";
      case "medium": return "text-orange-600";
      case "low": return "text-green-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-3 sm:p-4 lg:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Support & Help</h1>
          <p className="text-gray-600 text-sm sm:text-base">Get help and support for your seller account</p>
        </div>
        <Button className="bg-gray-900 hover:bg-gray-800 w-full sm:w-auto text-sm sm:text-base">
          <MessageSquare className="h-4 w-4 mr-2" />
          New Support Ticket
        </Button>
      </div>

      {/* Contact Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <Card>
          <CardContent className="p-4 sm:p-6 text-center">
            <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Phone Support</h3>
            <p className="text-sm text-gray-600 mb-3">+92-21-111-SELLER</p>
            <p className="text-xs text-gray-500">Mon-Fri, 9AM-6PM</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 sm:p-6 text-center">
            <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Email Support</h3>
            <p className="text-sm text-gray-600 mb-3">seller@support.com</p>
            <p className="text-xs text-gray-500">Response within 24 hours</p>
          </CardContent>
        </Card>

        <Card className="sm:col-span-2 lg:col-span-1">
          <CardContent className="p-4 sm:p-6 text-center">
            <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Live Chat</h3>
            <p className="text-sm text-gray-600 mb-3">Chat with our team</p>
            <Button size="sm" variant="outline" className="text-xs sm:text-sm">Start Chat</Button>
          </CardContent>
        </Card>
      </div>

      {/* Support Tabs */}
      <Tabs defaultValue="tickets" className="space-y-4 sm:space-y-6">
        <div className="w-full overflow-x-auto">
          <TabsList className="grid w-full grid-cols-3 min-w-[300px] sm:min-w-0">
            <TabsTrigger value="tickets" className="text-xs sm:text-sm px-2 sm:px-4">Support Tickets</TabsTrigger>
            <TabsTrigger value="faqs" className="text-xs sm:text-sm px-2 sm:px-4">FAQs</TabsTrigger>
            <TabsTrigger value="contact" className="text-xs sm:text-sm px-2 sm:px-4">Contact Form</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="tickets" className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Your Support Tickets</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Ticket ID</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Subject</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Priority</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Created</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tickets.map((ticket) => (
                      <tr key={ticket.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4 font-medium text-gray-900">{ticket.id}</td>
                        <td className="py-4 px-4 text-gray-600">{ticket.subject}</td>
                        <td className="py-4 px-4">
                          <Badge variant={getStatusColor(ticket.status)}>
                            {ticket.status}
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`font-medium capitalize ${getPriorityColor(ticket.priority)}`}>
                            {ticket.priority}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-gray-600">{ticket.created}</td>
                        <td className="py-4 px-4">
                          <Button size="sm" variant="outline">View</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile/Tablet Cards */}
              <div className="lg:hidden space-y-4">
                {tickets.map((ticket) => (
                  <Card key={ticket.id} className="p-4 border border-gray-200">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-gray-900 text-sm sm:text-base">{ticket.id}</h3>
                          <p className="text-xs sm:text-sm text-gray-600">{ticket.subject}</p>
                        </div>
                        <Badge variant={getStatusColor(ticket.status)} className="text-xs">
                          {ticket.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className={`font-medium capitalize ${getPriorityColor(ticket.priority)}`}>
                          {ticket.priority} priority
                        </span>
                        <span className="text-gray-600">{ticket.created}</span>
                      </div>
                      <Button size="sm" variant="outline" className="w-full text-xs sm:text-sm">View Ticket</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="faqs" className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 sm:space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 sm:pb-6 last:border-b-0">
                    <h3 className="font-medium text-gray-900 mb-2 flex items-center text-sm sm:text-base">
                      <HelpCircle className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base ml-6">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Contact Support</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                    placeholder="Enter subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priority
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Urgent</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                    placeholder="Describe your issue or question..."
                  ></textarea>
                </div>
                <Button type="submit" className="bg-gray-900 hover:bg-gray-800 w-full sm:w-auto">
                  <Send className="h-4 w-4 mr-2" />
                  Submit Ticket
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
