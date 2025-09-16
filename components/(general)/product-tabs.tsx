"use client";

import { useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

interface ProductTabsProps {
  product: {
    images: string[];
    tags: string[];
    makers: Array<{
      id: string;
      name: string;
      avatar: string;
      role: string;
      verified?: boolean;
    }>;
    pricing: {
      discount: string;
      originalPrice: string;
      discountedPrice: string;
    };
  };
}

export function ProductTabs({ product }: ProductTabsProps) {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-6 max-md:grid-cols-3 overflow-hidden">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="launches">
          Launches{" "}
          <Badge variant="secondary" className="ml-1">
            2
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="reviews">
          Reviews{" "}
          <Badge variant="secondary" className="ml-1">
            7
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="alternatives">Alternatives</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
        <TabsTrigger value="more">More</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="space-y-6">
        <ShownedComponent product={product} />
      </TabsContent>

      <TabsContent value="launches">
        <ShownedComponent product={product} />
      </TabsContent>

      <TabsContent value="reviews">
        <ShownedComponent product={product} />
      </TabsContent>

      <TabsContent value="alternatives">
        <ShownedComponent product={product} />
      </TabsContent>

      <TabsContent value="team">
        <ShownedComponent product={product} />
      </TabsContent>

      <TabsContent value="more">
        <ShownedComponent product={product} />
      </TabsContent>
    </Tabs>
  );
}

const ShownedComponent = ({ product }: ProductTabsProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };
  return (
    <Card className="border-2 border-orange-200 dark:border-orange-800">
      <CardContent className="p-6">
        <div className="relative">
          <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
            <Image
              width={1000}
              height={1000}
              src={product.images[currentImageIndex]}
              alt="Product screenshot"
              className="rounded-lg object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="lg"
                className="bg-white/90 hover:bg-white text-black rounded-full w-16 h-16"
              >
                <Play className="h-6 w-6 ml-1" />
              </Button>
            </div>

            {/* Navigation arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            {product.images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? "bg-orange-500" : "bg-gray-300"
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Free Options</h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                Launch tags:
              </span>
              {product.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">
                  Launch Team / Built With
                </span>
              </div>
              <div className="flex -space-x-2">
                {product.makers.map((maker) => (
                  <Avatar
                    key={maker.id}
                    className="h-8 w-8 border-2 border-background"
                  >
                    <AvatarImage src={maker.avatar} alt={maker.name} />
                    <AvatarFallback>{maker.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <Button variant="outline" size="sm">
                Show more
              </Button>
            </div>

            <Badge
              variant="outline"
              className="text-orange-600 border-orange-600"
            >
              {product.pricing.discount}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
