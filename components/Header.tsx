"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/lib/store";
import Image from "next/image";

export default function Header() {
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

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Regulation", href: "/regulation" },
    { name: "Markets", href: "/markets" },
    { name: "Publications", href: "/publications" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--seczim-white)]/95 backdrop-blur-md shadow-sm py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 z-60">
            <Image src={"/logo.png"} alt="" width={200} height={200} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-amber-600"
                    : isScrolled
                    ? "text-[var(--seczim-gray-dark)] hover:text-[var(--seczim-brown)]"
                    : "text-[var(--seczim-white)]/90 hover:text-[var(--seczim-white)]"
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-amber-700"
                    layoutId="activeIndicator"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Login Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              variant={isScrolled ? "outline" : "secondary"}
              size="sm"
              className={isScrolled ? "border-amber-700 text-amber-700" : ""}
            >
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative w-8 h-8 z-60 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6">
              <span
                className={`block absolute h-0.5 w-6 transform transition duration-300 ease-in-out ${
                  isMenuOpen
                    ? "rotate-45 bg-white"
                    : isScrolled
                    ? "bg-gray-800 -translate-y-2"
                    : "bg-white -translate-y-2"
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-6 transform transition duration-300 ease-in-out ${
                  isMenuOpen
                    ? "opacity-0 bg-white"
                    : isScrolled
                    ? "bg-gray-800"
                    : "bg-white"
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-6 transform transition duration-300 ease-in-out ${
                  isMenuOpen
                    ? "-rotate-45 bg-white"
                    : isScrolled
                    ? "bg-gray-800 translate-y-2"
                    : "bg-white translate-y-2"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/70 z-40 lg:hidden"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
              className="fixed top-0 right-0 w-80 h-full bg-amber-900 z-50 shadow-2xl lg:hidden"
            >
              <div className="flex flex-col h-full pt-20 pb-10 px-6">
                <nav className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-lg font-medium py-2 px-4 rounded-lg transition-colors ${
                        pathname === item.href
                          ? "bg-amber-800 text-white"
                          : "text-white/80 hover:bg-amber-800 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto pt-10 border-t border-amber-700">
                  <Button className="w-full mb-4" size="lg">
                    Login
                  </Button>
                  <div className="text-white/70 text-sm">
                    <p>Need help? Contact us</p>
                    <p className="mt-1">info@seczim.co.zw</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
