
import { Star, MessageSquare, Flag, Filter, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      customer: "Ahmad Khan",
      product: "iPhone 13 Pro Case",
      rating: 5,
      comment: "Excellent quality and fast delivery! Highly recommended.",
      date: "2024-06-08",
      status: "published",
      helpful: 12
    },
    {
      id: 2,
      customer: "Sarah Ali",
      product: "Wireless Headphones",
      rating: 4,
      comment: "Good sound quality but could be more comfortable for long usage.",
      date: "2024-06-07",
      status: "published",
      helpful: 8
    },
    {
      id: 3,
      customer: "Hassan Sheikh",
      product: "USB-C Charger",
      rating: 2,
      comment: "Charging speed is slower than expected. Not satisfied.",
      date: "2024-06-06",
      status: "flagged",
      helpful: 3
    },
    {
      id: 4,
      customer: "Fatima Ahmed",
      product: "Bluetooth Speaker",
      rating: 5,
      comment: "Amazing sound quality! Perfect for outdoor activities.",
      date: "2024-06-05",
      status: "replied",
      helpful: 15
    },
  ];

  const averageRating = 4.2;
  const totalReviews = 245;

  const ratingDistribution = [
    { stars: 5, count: 120, percentage: 49 },
    { stars: 4, count: 78, percentage: 32 },
    { stars: 3, count: 30, percentage: 12 },
    { stars: 2, count: 12, percentage: 5 },
    { stars: 1, count: 5, percentage: 2 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reviews & Ratings</h1>
          <p className="text-gray-600">Monitor and respond to customer feedback</p>
        </div>
      </div>

      {/* Rating Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Overall Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">{averageRating}</div>
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(averageRating) ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600">{totalReviews} total reviews</p>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Rating Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {ratingDistribution.map((rating) => (
                <div key={rating.stars} className="flex items-center space-x-3">
                  <div className="flex items-center w-12">
                    <span className="text-sm font-medium">{rating.stars}</span>
                    <Star className="h-3 w-3 text-yellow-400 fill-current ml-1" />
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: `${rating.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-12">{rating.count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reviews List */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Customer Reviews</CardTitle>
            <div className="flex space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search reviews..."
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
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>{review.customer.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">{review.customer}</h4>
                        <p className="text-sm text-gray-600">{review.product}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={
                          review.status === "published" ? "default" :
                          review.status === "flagged" ? "destructive" : "secondary"
                        }>
                          {review.status}
                        </Badge>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center mt-2 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 mb-3">{review.comment}</p>
                    
                    <div className="flex items-center space-x-4">
                      <Button size="sm" variant="outline">
                        <MessageSquare className="h-3 w-3 mr-1" />
                        Reply
                      </Button>
                      <Button size="sm" variant="outline">
                        <Flag className="h-3 w-3 mr-1" />
                        Flag
                      </Button>
                      <span className="text-sm text-gray-500">{review.helpful} found helpful</span>
                    </div>

                    {review.status === "replied" && (
                      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm font-medium text-gray-900 mb-1">Your Reply:</p>
                        <p className="text-sm text-gray-700">Thank you for your feedback! We're glad you enjoyed our product.</p>
                      </div>
                    )}
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
