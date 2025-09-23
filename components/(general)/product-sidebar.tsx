"use client";
import {
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Calendar,
  BarChart3,
  Heart,
  Bookmark,
  Share,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

interface ProductSidebarProps {
  product: {
    name: string;
    website: string;
    github: string;
    linkedin: string;
    twitter: string;
    launchedYear: string;
    totalLaunches: number;
    forum: string;
  };
}

export function ProductSidebar({ product }: ProductSidebarProps) {
  return (
    <div className="space-y-6 dark:border dark:border-white/10 p-4 rounded">
      <div>
        <p className="font-semibold">Launching Today</p>
        <div className="p-4 mt-3 bg-gray-100 dark:bg-black border-gray-200 dark:border dark:border-white/30 rounded-lg w-full lg:w-3/4 space-y-2">
          <div className="flex justify-between">
            <div>
              <p className="text-3xl font-medium">#2</p>
              <p className="">Day Rank</p>
            </div>
            <div className="py-3">
              <div className="flex justify-center rounded-full border-2 border-gray-200 ml-auto dark:bg-black dark:border-white/30">
                <div className="p-2 flex items-center">
                  <button title="Go to previous launch (or press ←)">
                    <ChevronLeft />
                  </button>
                </div>
                <div className="w-[2px] bg-gray-200 last:hidden dark:w-[1px] dark:bg-white/30"></div>
                <div className="p-2 flex items-center">
                  <button title="Go to next launch (or press →)">
                    <ChevronRight />
                  </button>
                </div>
                <div className="w-[2px] bg-gray-200 last:hidden"></div>
              </div>
            </div>
          </div>
          <Button className="bg-[#ff6154] rounded-full hover:bg-[#ff6154]">
            <div className="flex flex-row flex-nowrap items-center justify-center gap-1 px-4 transition-all duration-300 border-brand-500 bg-brand-500 ">
              <div className="text-base font-semibold leading-none text-white">
                Upvote • 241 points
              </div>
            </div>
          </Button>
        </div>
      </div>
      {/* Action Buttons */}
      <div>
        <div className="space-y-3">
          <div className="w-full justify-start flex items-center text-gray-400">
            <Heart className="h-4 w-4 mr-2" />
            Follow Your Next Store
          </div>
          <div className="w-full justify-start flex items-center text-gray-400">
            <Bookmark className="h-4 w-4 mr-2" />
            Add to collection
          </div>
          <div className="w-full justify-start flex items-center text-gray-400">
            <Share className="h-4 w-4 mr-2" />
            Share
          </div>
          <div className="w-full justify-start flex items-center text-gray-400">
            <BarChart3 className="h-4 w-4 mr-2" />
            Analytics
          </div>
        </div>
      </div>

      {/* Company Info */}
      <div>
        <div>
          <div className="text-lg font-semibold">Company Info</div>
        </div>
        <div className="space-y-3">
          <div className="space-y-2 mt-2 ms-2">
            <Link
              href={product.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <ExternalLink className="h-4 w-4" />
              <span>yournextstore.com</span>
            </Link>

            <Link
              href={product.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </Link>
          </div>

          <Separator />

          <div className="space-y-3 ">
            <div>
              <h4 className="font-medium text-sm mb-2">Your Next Store Info</h4>
              <div className="ms-2 flex items-center space-x-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Launched in {product.launchedYear}</span>
              </div>
            </div>

            <Button variant="link" className="p-0 h-auto text-sm text-blue-600">
              View {product.totalLaunches} launches
            </Button>
          </div>

          <Separator />

          <div className="">
            <h4 className="font-medium text-sm mb-2">Forum</h4>
            <div className="ms-2 flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-gray-400 rounded-full" />
              <span>{product.forum}</span>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="font-medium text-sm mb-3">Social</h4>
            <div className="space-y-2">
              <Link
                href={product.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </Link>
              <Link
                href={product.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-4 w-4" />
                <span>X</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
