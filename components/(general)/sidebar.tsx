"use client"

import { Calendar, TrendingUp, Star, Bookmark, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const navigation = [
    {
      name: "Today",
      href: "/",
      icon: Calendar,
      current: true,
    },
    {
      name: "This Week",
      href: "/week",
      icon: TrendingUp,
      current: false,
    },
    {
      name: "This Month", 
      href: "/month",
      icon: Star,
      current: false,
    },
    {
      name: "Collections",
      href: "/collections",
      icon: Bookmark,
      current: false,
    },
    {
      name: "Following",
      href: "/following",
      icon: Users,
      current: false,
    },
  ]

  const topics = [
    "AI",
    "Developer Tools",
    "Design Tools", 
    "Productivity",
    "Marketing",
    "Analytics",
    "Mobile Apps",
    "SaaS",
    "E-commerce",
    "Social Media"
  ]

  return (
    <div className={cn("w-64 space-y-6", className)}>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Navigation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1 p-0 pb-4">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <Link key={item.name} href={item.href}>
                <Button
                  variant={item.current ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start px-4",
                    item.current && "bg-orange-500/10 text-orange-600"
                  )}
                >
                  <Icon className="mr-3 h-4 w-4" />
                  {item.name}
                </Button>
              </Link>
            )
          })}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Popular Topics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {topics.map((topic) => (
            <Link
              key={topic}
              href={`/topics/${topic.toLowerCase().replace(/\s+/g, '-')}`}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {topic}
            </Link>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border-orange-500/20">
        <CardContent className="p-6">
          <h3 className="font-semibold text-orange-600 mb-2">
            Submit Your Product
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Share your amazing product with the community and get valuable feedback.
          </p>
          <Button className="w-full bg-orange-500 hover:bg-orange-600">
            Submit Product
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}