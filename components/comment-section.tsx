"use client";

import { useState } from "react";
import { MessageCircle, Heart, Flag, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { VeltInlineCommentsSection } from "@veltdev/react";
import useTheme from "./theme-toggle";

interface CommentSectionProps {
  productId: string;
}

const mockComments = [
  {
    id: "1",
    author: {
      name: "Szymon Pruszyński",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      verified: true,
      role: "Maker",
    },
    content:
      "👋 Hey PH community! I'm a co-founder and COO@Your Next Store\n\nVision, mission\nWe want to enable online sellers to instantly launch beautiful, performant stores that convert visitors into buyers without complex configurations or steep learning curves. We call it Omakase Commerce. We've been working tirelessly for the last months to deliver that experience to you.\n\nLaunch\nToday, we're happy to launch on PH again! We've made a major pivot, and we would love to get a feedback from you!\n\n🔗 LINK to our demo 🔗",
    timestamp: "2 hours ago",
    likes: 12,
    replies: [],
  },
];

export function CommentSection({ productId }: CommentSectionProps) {
  const [comments] = useState(mockComments);
  const { theme } = useTheme();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MessageCircle className="h-5 w-5" />
          <span>Discussion</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <section id="container-id">
            <VeltInlineCommentsSection
              multiThread={true}
              targetElementId="container-id"
              shadowDom={false}
              dialogVariant="dialog-variant"
              variant="inline-section-variant"
              darkMode={theme === "dark"}
            />
          </section>
        </div>
        {/* Comments List */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="space-y-3">
              <div className="flex items-start space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={comment.author.avatar}
                    alt={comment.author.name}
                  />
                  <AvatarFallback>
                    {comment.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-sm">
                      {comment.author.name}
                    </span>
                    {comment.author.verified && (
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                    <Badge
                      variant="outline"
                      className="text-xs bg-orange-50 text-orange-600 border-orange-200"
                    >
                      {comment.author.role}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {comment.timestamp}
                    </span>
                  </div>

                  <div className="text-sm text-foreground whitespace-pre-wrap">
                    {comment.content}
                  </div>

                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <Heart className="h-4 w-4 mr-1" />
                      <span className="text-xs">{comment.likes}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      <span className="text-xs">Reply</span>
                    </Button>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Flag className="h-4 w-4 mr-2" />
                          Report
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
