"use client"

import { useState, useMemo } from "react"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

const SAMPLE_PRODUCTS = [
  {
    id: "1",
    name: "Figma",
    tagline: "The collaborative interface design tool",
    description: "Figma is a web-based graphics editing and user interface design app. You can use it to do all kinds of graphic design work from wireframing websites, designing mobile app interfaces, prototyping designs, crafting social media posts, and everything in between.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=150",
    votes: 1247,
    comments: 89,
    makers: [
      { name: "Dylan Field", avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { name: "Evan Wallace", avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150" }
    ],
    topics: ["Design Tools", "Collaboration", "UI/UX"],
    featured: true
  },
  {
    id: "2",
    name: "Notion",
    tagline: "The all-in-one workspace for your notes, tasks, wikis, and databases",
    description: "Notion is a single space where you can think, write, and plan. Capture thoughts, manage projects, or even run an entire company — and do it exactly the way you want.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=150",
    votes: 2103,
    comments: 156,
    makers: [
      { name: "Ivan Zhao", avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150" }
    ],
    topics: ["Productivity", "Note-taking", "Project Management"]
  },
  {
    id: "3",
    name: "Stripe",
    tagline: "Online payment processing for internet businesses",
    description: "Stripe is a suite of payment APIs that powers commerce for online businesses of all sizes, including fraud prevention, and subscription management.",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=150",
    votes: 956,
    comments: 67,
    makers: [
      { name: "John Collison", avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { name: "Patrick Collison", avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150" }
    ],
    topics: ["Fintech", "API", "E-commerce"]
  },
  {
    id: "4",
    name: "Vercel",
    tagline: "The platform for frontend developers",
    description: "Vercel combines the best developer experience with an obsessive focus on end-user performance. Our platform enables frontend teams to do their best work.",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=150",
    votes: 743,
    comments: 43,
    makers: [
      { name: "Guillermo Rauch", avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150" }
    ],
    topics: ["Developer Tools", "Hosting", "Frontend"]
  },
  {
    id: "5",
    name: "Linear",
    tagline: "The issue tracking tool you'll actually enjoy using",
    description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. It's built for high-performance teams.",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=150",
    votes: 832,
    comments: 91,
    makers: [
      { name: "Karri Saarinen", avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { name: "Jori Lallo", avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150" }
    ],
    topics: ["Project Management", "Developer Tools", "Productivity"]
  },
  {
    id: "6",
    name: "Framer",
    tagline: "Interactive design and prototyping",
    description: "Framer is where teams design and publish stunning sites. Design on a familiar canvas. Add animations, interactions, and optimize for every breakpoint — then publish to the web.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=150",
    votes: 654,
    comments: 34,
    makers: [
      { name: "Koen Bok", avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150" }
    ],
    topics: ["Design Tools", "Prototyping", "Web Design"]
  }
]

const CATEGORIES = [
  "All",
  "Design Tools",
  "Developer Tools", 
  "Productivity",
  "Fintech",
  "AI"
]

export function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("votes")

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = SAMPLE_PRODUCTS

    if (selectedCategory !== "All") {
      filtered = filtered.filter(product =>
        product.topics.includes(selectedCategory)
      )
    }

    return filtered.sort((a, b) => {
      if (sortBy === "votes") return b.votes - a.votes
      if (sortBy === "comments") return b.comments - a.comments
      return 0
    })
  }, [selectedCategory, sortBy])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Today&apos;s Top Products</h1>
          <p className="text-muted-foreground mt-2">
            Discover the best new products launching today
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant={sortBy === "votes" ? "default" : "outline"}
            size="sm"
            onClick={() => setSortBy("votes")}
          >
            Most Upvotes
          </Button>
          <Button
            variant={sortBy === "comments" ? "default" : "outline"}
            size="sm"
            onClick={() => setSortBy("comments")}
          >
            Most Comments
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "secondary"}
            className={`cursor-pointer transition-colors ${
              selectedCategory === category
                ? "bg-orange-500 hover:bg-orange-600"
                : "hover:bg-secondary"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </div>

      <div className="grid gap-4">
        {filteredAndSortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredAndSortedProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No products found in this category.
          </p>
        </div>
      )}
    </div>
  )
}