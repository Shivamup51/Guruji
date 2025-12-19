"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Phone,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isPoojaListOpen, setIsPoojaListOpen] = React.useState(false);
  const [isDesktopPoojaOpen, setIsDesktopPoojaOpen] = React.useState(false);

  const poojaList = [
    "Mahamrutunjay jaap",
    "Kaal sarp dosh niwaran",
    "Grah shanti",
    "Nakshatra shanti",
    "Yog shanti",
    "Vastu shanti",
    "Narayan Nag Bali",
    "Tripindi",
    "Pitar dosh shanti",
  ];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/logo.png"
                alt="Shri Trimbakeshwar Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
              <span
                className="text-xl sm:text-2xl font-bold"
                style={{ color: "#9B251E" }}
              >
                Shri Trimbakeshwar
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium transition-colors hover:opacity-80"
                style={{ color: "#9B251E" }}
              >
                {link.label}
              </Link>
            ))}
            {/* Pooja List Dropdown - Desktop */}
            <DropdownMenu
              open={isDesktopPoojaOpen}
              onOpenChange={setIsDesktopPoojaOpen}
            >
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-base font-medium transition-colors hover:opacity-80 h-auto px-0"
                  style={{ color: "#9B251E" }}
                >
                  Pooja List
                  {isDesktopPoojaOpen ? (
                    <ChevronUp className="h-4 w-4 ml-1 transition-transform" />
                  ) : (
                    <ChevronDown className="h-4 w-4 ml-1 transition-transform" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-[600px] p-4">
                <div className="grid grid-cols-3 gap-3">
                  {poojaList.map((pooja, index) => (
                    <Link
                      key={index}
                      href={`/${pooja.toLowerCase().replace(/\s+/g, "-")}`}
                      className="px-3 py-2 rounded-md text-sm hover:bg-gray-100 transition-colors text-center"
                      style={{ color: "#9B251E" }}
                      onClick={() => setIsDesktopPoojaOpen(false)}
                    >
                      {pooja}
                    </Link>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex md:items-center">
            <Link href="/contact-us">
              <Button
                size="sm"
                className="text-sm font-semibold px-4 py-2"
                style={{ backgroundColor: "#9B251E", color: "#FBDCAB" }}
              >
                <Phone className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
              style={{ color: "#9B251E" }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium transition-colors hover:opacity-80 px-2 py-1"
                  style={{ color: "#9B251E" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {/* Pooja List - Mobile */}
              <div>
                <button
                  onClick={() => setIsPoojaListOpen(!isPoojaListOpen)}
                  className="flex items-center justify-between w-full text-base font-medium mb-2 px-2 py-1"
                  style={{ color: "#9B251E" }}
                >
                  <span>Pooja List</span>
                  {isPoojaListOpen ? (
                    <ChevronUp className="h-4 w-4 transition-transform" />
                  ) : (
                    <ChevronDown className="h-4 w-4 transition-transform" />
                  )}
                </button>
                {isPoojaListOpen && (
                  <ScrollArea className="h-[300px] w-full">
                    <div className="flex flex-col space-y-2 pr-4">
                      {poojaList.map((pooja, index) => (
                        <Link
                          key={index}
                          href={`/${pooja.toLowerCase().replace(/\s+/g, "-")}`}
                          className="px-2 py-1 text-sm hover:opacity-80 transition-colors"
                          style={{ color: "#9B251E" }}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsPoojaListOpen(false);
                          }}
                        >
                          {pooja}
                        </Link>
                      ))}
                    </div>
                  </ScrollArea>
                )}
              </div>
              {/* CTA Button - Mobile */}
              <div className="px-2 pt-2">
                <Link
                  href="/contact-us"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    size="sm"
                    className="w-full text-sm font-semibold"
                    style={{ backgroundColor: "#9B251E", color: "#FBDCAB" }}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Us
                  </Button>
                </Link>
              </div>
              {/* WhatsApp Button - Mobile */}
              <div className="px-2 pt-2">
                <a
                  href={`https://wa.me/918208780240`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-md text-sm font-medium transition-colors bg-green-500 hover:bg-green-600 text-white"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp: 8208780240
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
