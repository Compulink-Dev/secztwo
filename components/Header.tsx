"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useAppStore } from "@/lib/store";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { isMenuOpen, toggleMenu, closeMenu } = useAppStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  return (
    <div className="">
      {/* Enhanced Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--seczim-white)]/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-2 z-60">
            <Image src={"/logo.png"} alt="" width={200} height={200} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={
                      !isScrolled
                        ? `bg-transparent text-white`
                        : "text-amber-950 bg-transparent"
                    }
                  >
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-amber-500 to-amber-700 p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              SEC Zimbabwe
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Protecting investors through effective regulation
                              of the capital market.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="about" title="About" />
                      <ListItem href="about/#who-is-secz" title="Who is SECZ?">
                        Learn about our mission and objectives.
                      </ListItem>
                      <ListItem href="about/#structure" title="Our Structure">
                        Explore our organizational structure.
                      </ListItem>
                      <ListItem href="about/#committees" title="Committees">
                        Discover our specialized committees.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="">
                  <NavigationMenuTrigger
                    className={
                      !isScrolled
                        ? `bg-transparent text-white`
                        : "text-amber-950 bg-transparent"
                    }
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem href="#" title="Licensing">
                        Licensing of market participants
                      </ListItem>
                      <ListItem href="#" title="Regulation">
                        Market regulation and supervision
                      </ListItem>
                      <ListItem href="#" title="Enforcement">
                        Enforcement of securities laws
                      </ListItem>
                      <ListItem href="#" title="Education">
                        Investor education programs
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem
                  className={
                    !isScrolled
                      ? `bg-transparent text-white`
                      : "text-amber-950 bg-transparent"
                  }
                >
                  <Button variant="ghost" asChild>
                    <a href="#">Markets</a>
                  </Button>
                </NavigationMenuItem>
                <NavigationMenuItem
                  className={
                    !isScrolled
                      ? `bg-transparent text-white`
                      : "text-amber-950 bg-transparent"
                  }
                >
                  <Button variant="ghost" asChild>
                    <a href="#">Publications</a>
                  </Button>
                </NavigationMenuItem>
                <NavigationMenuItem
                  className={
                    !isScrolled
                      ? `bg-transparent text-white`
                      : "text-amber-950 bg-transparent"
                  }
                >
                  <Button variant="ghost" asChild>
                    <a href="/contact">Contact</a>
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search..."
                className="w-64 pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <Button variant="outline">Login</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t"
            >
              <div className="container py-4 space-y-4 ">
                <div className="grid gap-2">
                  <Button variant="ghost" className="justify-start">
                    About
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    Services
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    Markets
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    Publications
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    Contact
                  </Button>
                </div>
                <Separator />
                <div className="flex gap-2">
                  <Input
                    type="search"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button variant="outline">Login</Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}

// ListItem component for navigation
const ListItem = ({ href, title, children }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
