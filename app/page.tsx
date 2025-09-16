"use client";
import { Header } from "@/components/header";
import { ProductHero } from "@/components/product-hero";
import { ProductTabs } from "@/components/product-tabs";
import { ProductSidebar } from "@/components/product-sidebar";
import { CommentSection } from "@/components/comment-section";
import { SimilarProducts } from "@/components/similar-products";
import { VeltProvider } from "@veltdev/react";

// Mock data for the product
const productData = {
  id: "your-next-store",
  name: "Your Next Store",
  tagline: "Launch your store in minutes. Stripe-native. Built for AI.",
  description:
    "Your Next Store is for founders, brand owners and agencies who want to launch and run a modern, high-performance online store without the plugin bloat and limitations of platforms like Shopify. For those who value speed and adaptability.",
  logo: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=150",
  images: [
    "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
  ],
  votes: 276,
  rank: 1,
  dayRank: "Day Rank",
  launchingToday: true,
  reviews: 7,
  followers: 520,
  categories: ["Website builders", "Ecommerce platforms"],
  tags: ["SaaS", "Developer Tools", "E-Commerce"],
  website: "https://yournextstore.com",
  github: "https://github.com/yournextstore",
  linkedin: "https://linkedin.com/company/yournextstore",
  twitter: "https://twitter.com/yournextstore",
  launchedYear: "2024",
  totalLaunches: 2,
  forum: "p/your-next-store",
  makers: [
    {
      id: "1",
      name: "Szymon Pruszyński",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      role: "Maker",
      verified: true,
    },
    {
      id: "2",
      name: "John Doe",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
      role: "Co-founder",
    },
  ],
  pricing: {
    discount: "-25% for 1 year",
    originalPrice: "$99",
    discountedPrice: "$74",
  },
};

const ProductDetailPage = () => {
  return (
    <VeltProvider apiKey={process.env.NEXT_PUBLIC_VELT_ID!}>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="px-16 max-md:px-3 max-md:container mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <ProductHero product={productData} />
              <ProductTabs product={productData} />
              <CommentSection productId={productData.id} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ProductSidebar product={productData} />
              <SimilarProducts />
            </div>
          </div>
        </main>
      </div>
    </VeltProvider>
  );
};
export default ProductDetailPage;
