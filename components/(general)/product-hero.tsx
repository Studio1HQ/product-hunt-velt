"use client";

import { useState } from "react";
import { ChevronUp, ExternalLink, Star, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProductHeroProps {
  product: {
    id: string;
    name: string;
    tagline: string;
    description: string;
    logo: string;
    votes: number;
    rank: number;
    dayRank: string;
    launchingToday: boolean;
    reviews: number;
    followers: number;
    categories: string[];
    website: string;
  };
}

export function ProductHero({ product }: ProductHeroProps) {
  const [votes, setVotes] = useState(product.votes);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = () => {
    if (!hasVoted) {
      setVotes(votes + 1);
      setHasVoted(true);
    }
  };

  return (
    <div className="space-y-6">
      {/* Launch Notice */}
      <Card className="border-l-4 border-l-orange-500 bg-gradient-to-r from-orange-50 to-transparent dark:from-orange-950/20">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                This is the 2nd launch from Your Next Store.
              </span>
              <Button
                variant="link"
                className="p-0 h-auto text-sm text-orange-600"
              >
                View more →
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Product Info */}
      <div className="flex items-start space-x-6">
        <div className="flex-shrink-0">
          <Image
            width={100}
            height={100}
            src={product.logo}
            alt={product.name}
            className="rounded-lg object-cover"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-3xl font-bold text-foreground">
                  {product.name}
                </h1>
                {product.launchingToday && (
                  <Badge className="bg-orange-500 hover:bg-orange-600 text-whit max-md:hidden text-white">
                    Launching today
                  </Badge>
                )}
              </div>

              <p className="text-lg text-muted-foreground mb-4">
                {product.tagline}
              </p>

              <p className="text-foreground mb-4 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4" />
                  <span>{product.reviews} reviews</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{product.followers} followers</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 mt-4">
                {product.categories.map((category) => (
                  <Badge key={category} variant="secondary" className="text-xs">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-center space-y-4 ml-6">

              {/* Visit Website */}
              <Button variant="outline" className="w-full rounded-full" asChild>
                <a
                  href={product.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit website
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
