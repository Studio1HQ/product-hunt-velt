"use client"

import { Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const similarProducts = [
  {
    id: "squarespace",
    name: "Squarespace",
    description: "Everything needed to power your ideas.",
    logo: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5.0,
    reviews: 9,
    categories: ["Website builders", "Ecommerce platforms"]
  },
  {
    id: "marketsy",
    name: "Marketsy.ai",
    description: "Single prompt - Single ready to go e-store",
    logo: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 4.9,
    reviews: 20,
    categories: ["Website builders", "Ecommerce platforms"]
  },
  {
    id: "shopfunnels",
    name: "ShopFunnels - Ecom Builder",
    description: "Create a powerful ecom store on your own website",
    logo: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5.0,
    reviews: 21,
    categories: ["Website builders", "Ecommerce platforms"]
  },
  {
    id: "storebuddy",
    name: "StoreBuddy",
    description: "Turn your instant vm shop into a full-fledged store",
    logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 4.8,
    reviews: 15,
    categories: ["Website builders", "Ecommerce platforms"]
  }
]

export function SimilarProducts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Similar Products</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {similarProducts.map((product) => (
          <div key={product.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
            <Avatar className="h-10 w-10 rounded-lg">
              <AvatarImage src={product.logo} alt={product.name} />
              <AvatarFallback className="rounded-lg">
                {product.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm text-foreground mb-1">
                {product.name}
              </h4>
              <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                {product.description}
              </p>
              
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex items-center space-x-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {product.categories.map((category) => (
                  <Badge key={category} variant="secondary" className="text-xs px-2 py-0">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}