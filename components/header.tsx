"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  useVeltClient,
  VeltCommentsSidebar,
  VeltNotificationsTool,
  VeltPresence,
  VeltSidebarButton,
} from "@veltdev/react";
import { names, userIds, useUserStore } from "@/helper/userdb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useTheme, { ThemeToggleButton } from "../hooks/theme-toggle";
import { Input } from "./ui/input";

export function Header() {
  const navigationItems = [
    { name: "Products", href: "/" },
    { name: "Topics", href: "/topics" },
    { name: "Collections", href: "/collections" },
    { name: "Stories", href: "/stories" },
  ];
  const { user, setUser } = useUserStore();
  const { client } = useVeltClient();
  const prevUserRef = useRef(user);
  const isInitializingRef = useRef(false); // Prevent overlapping initialization calls

  const predefinedUsers = useMemo(
    () =>
      userIds.map((uid, index) => {
        const avatarUrls = [
          "https://api.dicebear.com/7.x/pixel-art/svg?seed=Nany",
          "https://api.dicebear.com/7.x/pixel-art/svg?seed=Mary",
        ];
        return {
          uid: uid,
          displayName: names[index],
          email: `${names[index].toLowerCase()}@gmail.com`,
          photoUrl: avatarUrls[index],
        };
      }),
    []
  );

  // Initialize user from localStorage if none exists
  useEffect(() => {
    if (typeof window !== "undefined" && !user) {
      const storedUser = localStorage.getItem("user-storage");
      if (!storedUser) {
        setUser(predefinedUsers[0]);
      }
    }
  }, [user, setUser, predefinedUsers]);

  // Handle Velt client initialization, user identification, and document setting
  useEffect(() => {
    if (!client || !user || isInitializingRef.current) {
      console.log("Velt init skipped:", {
        client: !!client,
        user: !!user,
        initializing: isInitializingRef.current,
      });
      return;
    }

    const initializeVelt = async () => {
      isInitializingRef.current = true;
      try {
        // Detect user switch
        const isUserSwitch = prevUserRef.current?.uid !== user.uid;
        prevUserRef.current = user;

        console.log("Starting Velt init for user:", user.uid, { isUserSwitch });

        // Re-identify the user (handles initial and switches)
        const veltUser = {
          userId: user.uid,
          organizationId: "organization_id",
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoUrl,
        };
        await client.identify(veltUser);
        console.log("Velt user identified:", veltUser.userId);
        await client.setDocuments([
          {
            id: "product-hunt-velt",
            metadata: { documentName: "product-hunt-velt" },
          },
        ]);
        console.log("Velt documents set: product-hunt-velt");
      } catch (error) {
        console.error("Error initializing Velt:", error);
      } finally {
        isInitializingRef.current = false;
      }
    };

    initializeVelt();
  }, [client, user]); // Re-run on client or user change
  const { theme } = useTheme();
  console.log(theme);
  return (
    <header className="mx-auto  sticky top-0 z-50 border-b border bg-background/95">
      <div className="w-full max-w-7xl max-md:px-3 max-md:container mx-auto flex h-16 gap-1  lg:gap-6 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex flex-1 justify-between items-center space-x-4">
          <div className="space-x-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-orange-500 flex items-center justify-center rounded-full">
                <span className="text-white font-bold text-lg">P</span>
              </div>
            </Link>
            {/* Search */}
            <div className="max-md:hidden max-w-32 mr-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search ( ⌘ + k )"
                  className="pl-10 bg-gray-50 dark:bg-black border-gray-200 dark:border-white/30 text-sm rounded-full"
                />
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={"#"}
                className="text-sm font-medium text hover:text-foreground transition-colors flex items-center gap-2"
              >
                {item.name}
                <ChevronDown className="text-gray-400 h-4 w-4" />
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center justify-end gap-2 lg:space-x-4">
          <VeltCommentsSidebar darkMode={theme === "dark"} />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-2 h-8 bg-white  text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200  dark:border dark:border-white/30 dark:!bg-[#121212] dark:hover:!bg-gray-700"
              >
                <Avatar className="w-5 h-5">
                  <AvatarImage
                    src={user?.photoUrl || "https://via.placeholder.com/100"}
                    alt={user?.displayName || "User"}
                  />
                  <AvatarFallback className="text-xs">
                    {user?.displayName}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm truncate max-w-[100px]">
                  {user?.displayName}
                </span>
                <ChevronDown size={14} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-64 bg-white  text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200  dark:bg-[#121212] dark:border dark:border-white/30"
            >
              <DropdownMenuLabel>Select User</DropdownMenuLabel>
              <DropdownMenuSeparator className="dark:bg-white/40" />
              {predefinedUsers.map((Currentuser) => (
                <DropdownMenuItem
                  key={Currentuser.uid}
                  onClick={() => setUser(Currentuser)}
                  className="flex items-center space-x-3 p-3 cursor-pointer hover:!bg-gray-100 hover:dark:!bg-[#121212] dark:hover:!bg-gray-700"
                >
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src={Currentuser.photoUrl}
                      alt={Currentuser.displayName
                        .split(" ")
                        .map((i) => i.charAt(0).toUpperCase())
                        .join("")}
                    />
                    <AvatarFallback className="text-xs">
                      {Currentuser.displayName
                        .split(" ")
                        .map((i) => i.charAt(0).toUpperCase())
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900 dark:text-white/70">
                      {Currentuser.displayName}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-white/60">
                      {Currentuser.email}
                    </div>
                    <div className="text-xs text-gray-400 dark:text-white/50">
                      User
                    </div>
                  </div>
                  {user?.uid === Currentuser.uid && (
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  )}
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center space-x-2 text-blue-600 hover:dark:bg-[#515881] ">
                <User size={16} />
                <span className="hover:dark:text-white/70">Manage Users</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="hidden lg:flex gap-2">
            <VeltPresence />
            <VeltNotificationsTool darkMode={theme === "dark"} />
          </div>
          <VeltSidebarButton darkMode={theme === "dark"} />
          <div className="flex items-center gap-2">
            <Button variant="outline" className="hidden sm:inline-flex">
              Submit
            </Button>
            <ThemeToggleButton />
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://avatar.iran.liara.run/public/33" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}
