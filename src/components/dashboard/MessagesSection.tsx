
import { useState } from "react";
import { MessageSquare, Search, Send, Paperclip, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export const MessagesSection = () => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [message, setMessage] = useState("");

  const chats = [
    {
      id: 1,
      customer: "Ahmad Khan",
      lastMessage: "Is this item still available?",
      time: "2 min ago",
      unread: 2,
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      customer: "Sarah Ali",
      lastMessage: "When will my order be shipped?",
      time: "1 hour ago",
      unread: 0,
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      customer: "Hassan Sheikh",
      lastMessage: "Thank you for the quick delivery!",
      time: "3 hours ago",
      unread: 1,
      avatar: "/placeholder.svg"
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "customer",
      text: "Hi! Is the iPhone 13 case still available?",
      time: "10:30 AM"
    },
    {
      id: 2,
      sender: "seller",
      text: "Yes, it's available! We have it in multiple colors.",
      time: "10:32 AM"
    },
    {
      id: 3,
      sender: "customer",
      text: "Great! Can you show me the black one?",
      time: "10:33 AM"
    },
    {
      id: 4,
      sender: "customer",
      text: "Is this item still available?",
      time: "10:35 AM"
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Messages & Chat</h1>
        <p className="text-gray-600">Communicate with your customers</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Chat List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Conversations</span>
              <Badge variant="secondary">{chats.filter(chat => chat.unread > 0).length}</Badge>
            </CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {chats.map((chat, index) => (
                <div
                  key={chat.id}
                  onClick={() => setSelectedChat(index)}
                  className={`p-4 cursor-pointer hover:bg-gray-50 border-b border-gray-100 ${
                    selectedChat === index ? "bg-gray-100" : ""
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={chat.avatar} alt={chat.customer} />
                      <AvatarFallback>
                        <User className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <p className="font-medium text-gray-900 truncate">{chat.customer}</p>
                        {chat.unread > 0 && (
                          <Badge variant="destructive" className="ml-2">
                            {chat.unread}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                      <p className="text-xs text-gray-500">{chat.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Window */}
        <Card className="lg:col-span-2 flex flex-col">
          <CardHeader className="border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={chats[selectedChat]?.avatar} alt="Customer" />
                <AvatarFallback>
                  <User className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">{chats[selectedChat]?.customer}</CardTitle>
                <p className="text-sm text-gray-600">Online</p>
              </div>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "seller" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      msg.sender === "seller"
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        msg.sender === "seller" ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>

          {/* Message Input */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex space-x-2">
              <Button size="sm" variant="outline">
                <Paperclip className="h-4 w-4" />
              </Button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    setMessage("");
                  }
                }}
              />
              <Button className="bg-gray-900 hover:bg-gray-800">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
