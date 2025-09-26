"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    <div>
      <ul className="flex flex-row items-center flex-wrap gap-2">
        <li>
          <div className="rounded-full px-4 py-2 transition-colors duration-300 hover:bg-gray-200 hover:text-gray-700 flex items-center gap-2 bg-gray-200 text-gray-700">
            <span className="text-sm font-semibold">Overview</span>
          </div>
        </li>
        <li>
          <div className="rounded-full px-4 py-2 text-gray-500 transition-colors duration-300 hover:bg-gray-200 hover:text-gray-700 flex items-center gap-2">
            <span className="text-sm font-semibold">Reviews</span>
            <span className="box-border rounded-full bg-gray-50 px-2 py-0.5 text-14/4 font-semibold outline outline-1 outline-gray-200">
              2
            </span>
          </div>
        </li>
        <li>
          <div className="rounded-full px-4 py-2 text-gray-500 transition-colors duration-300 hover:bg-gray-200 hover:text-gray-700 flex items-center gap-2">
            <span className="text-sm font-semibold">Alternatives</span>
          </div>
        </li>
        <li>
          <div className="rounded-full px-4 py-2 text-gray-500 transition-colors duration-300 hover:bg-gray-200 hover:text-gray-700 flex items-center gap-2">
            <span className="text-sm font-semibold">Team</span>
          </div>
        </li>
        <li>
          <div className="rounded-full px-4 py-2 text-gray-500 transition-colors duration-300 hover:bg-gray-200 hover:text-gray-700 flex items-center gap-2">
            <span className="text-sm font-semibold">Awards</span>
          </div>
        </li>
        <li>
          <div data-test="product-more-btn">
            <span className="text-14 font-semibold text-dark-gray rounded-full px-4 py-2 text-gray-500 transition-colors duration-300 hover:text-gray-700 hover:!bg-gray-200">
              More
            </span>
          </div>
        </li>
      </ul>
      <ShownedComponent product={product} />
    </div>
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
    <Card className="border-none">
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

            {/* Navigation arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white hover:text-black"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white hover:text-black"
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

        <div className="hidden lg:block mt-6 space-y-4">
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
                  <div
                    key={maker.id}
                    className="h-8 w-8 border-2 border-background"
                  >
                    <Avatar>
                      <AvatarImage src={maker.avatar} alt={maker.name} />
                      <AvatarFallback>{maker.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
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
