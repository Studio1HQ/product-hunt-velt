"use client"

import { ExternalLink, Github, Linkedin, Twitter, Calendar, BarChart3, Heart, Bookmark, Share } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface ProductSidebarProps {
  product: {
    name: string
    website: string
    github: string
    linkedin: string
    twitter: string
    launchedYear: string
    totalLaunches: number
    forum: string
  }
}

export function ProductSidebar({ product }: ProductSidebarProps) {
  return (
    <div className="space-y-6">
      {/* Action Buttons */}
      <Card>
        <CardContent className="p-4 space-y-3">
          <Button variant="outline" className="w-full justify-start">
            <Heart className="h-4 w-4 mr-2" />
            Follow Your Next Store
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Bookmark className="h-4 w-4 mr-2" />
            Add to collection
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Share className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <BarChart3 className="h-4 w-4 mr-2" />
            Analytics
          </Button>
        </CardContent>
      </Card>

      {/* Company Info */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Company Info</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <a 
              href={product.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <ExternalLink className="h-4 w-4" />
              <span>yournextstore.com</span>
            </a>
            
            <a 
              href={product.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>
          
          <Separator />
          
          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-sm mb-2">Your Next Store Info</h4>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Launched in {product.launchedYear}</span>
              </div>
            </div>
            
            <Button variant="link" className="p-0 h-auto text-sm text-blue-600">
              View {product.totalLaunches} launches
            </Button>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-medium text-sm mb-2">Forum</h4>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-gray-400 rounded-full" />
              <span>{product.forum}</span>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-medium text-sm mb-3">Social</h4>
            <div className="space-y-2">
              <a 
                href={product.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a 
                href={product.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-4 w-4" />
                <span>X</span>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}