"use client";

import { useState } from "react";
import { ChevronUp, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    tagline: string;
    description: string;
    image: string;
    votes: number;
    comments: number;
    makers: Array<{
      name: string;
      avatar: string;
    }>;
    topics: string[];
    featured?: boolean;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const [votes, setVotes] = useState(product.votes);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = () => {
    if (!hasVoted) {
      setVotes(votes + 1);
      setHasVoted(true);
    }
  };

  return (
    <Card
      className={cn(
        "group hover:shadow-lg transition-all duration-200 border-border/50",
        product.featured && "ring-2 ring-orange-500/20"
      )}
    >
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Image
              width={400}
              height={400}
              src={product.image}
              alt={product.name}
              className="rounded-lg object-cover"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-orange-500 transition-colors">
                  {product.name}
                  {product.featured && (
                    <Badge
                      variant="secondary"
                      className="ml-2 bg-orange-500/10 text-orange-600"
                    >
                      Featured
                    </Badge>
                  )}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {product.tagline}
                </p>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center space-x-4 mt-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">by</span>
                    <div className="flex -space-x-1">
                      {product.makers.slice(0, 3).map((maker, index) => (
                        <Avatar
                          key={index}
                          className="h-6 w-6 border-2 border-background"
                        >
                          <AvatarImage src={maker.avatar} alt={maker.name} />
                          <AvatarFallback className="text-xs">
                            {maker.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <span className="text-sm font-medium">
                      {product.makers[0]?.name}
                      {product.makers.length > 1 &&
                        ` +${product.makers.length - 1}`}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mt-3">
                  {product.topics.slice(0, 3).map((topic) => (
                    <Badge key={topic} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center space-y-2 ml-4">
                <Button
                  variant={hasVoted ? "default" : "outline"}
                  size="sm"
                  onClick={handleVote}
                  className={cn(
                    "flex flex-col items-center space-y-1 h-auto py-2 px-3",
                    hasVoted && "bg-orange-500 hover:bg-orange-600"
                  )}
                >
                  <ChevronUp className="h-4 w-4" />
                  <span className="text-xs font-medium">{votes}</span>
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center space-x-1"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-xs">{product.comments}</span>
                </Button>

                <Button variant="ghost" size="sm">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
