"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Video AI",
    href: "#",
    children: [
      { name: "Image to Video AI", href: "#", desc: "Animate a still image into a realistic, dynamic video." },
      { name: "Text to Video AI", href: "#", desc: "Turn simple text prompts into a stunning, captivating video." },
      { name: "Video to Video AI", href: "#", desc: "Recreate existing videos into any creative animation style." },
      { name: "AI Animation Generator", href: "#", desc: "Generate captivating anime and cartoon videos in various styles." },
      { name: "AI Avatar", href: "#", desc: "Create lifelike video avatars from a single photo." },
      { name: "AI Shorts", href: "#", desc: "Create viral short videos with no filming and editing." },
    ],
  },
  {
    name: "Image AI",
    href: "#",
    children: [
      { name: "AI Image Generator", href: "#", desc: "Turn your ideas to appealing and believable AI images in any style." },
      { name: "Image to Image AI", href: "#", desc: "Transform your images into new styled and customized variations." },
      { name: "Chat to Image", href: "#", desc: "Chat with our AI to generate and refine images in real time." },
    ],
  },
  {
    name: "Effects",
    href: "#",
    children: [
      { name: "AI Kissing Video", href: "#", desc: "Create romantic kissing video effects." },
      { name: "AI Hug Generator", href: "#", desc: "Generate heartwarming hug animations." },
      { name: "Earth Zoom In", href: "#", desc: "Create stunning earth zoom in effects." },
      { name: "Action Figure", href: "#", desc: "Transform photos into action figures." },
    ],
  },
  {
    name: "AI Tools",
    href: "#",
    children: [
      { name: "AI Video Upscaler", href: "#", desc: "Enhance video resolution with AI." },
      { name: "AI Video Enhancer", href: "#", desc: "Improve video quality automatically." },
      { name: "Video to Anime", href: "#", desc: "Convert videos to anime style." },
      { name: "AI Background Remover", href: "#", desc: "Remove backgrounds instantly." },
    ],
  },
  { name: "Pricing", href: "#" },
  { name: "API", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="backdrop-blur-md bg-[#0F0D15]/80">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Pollo AI
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                  >
                    {item.name}
                    {item.children && (
                      <svg
                        className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.children && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-1 w-80 bg-[#1A1825] rounded-xl border border-[#2D2B3D] shadow-2xl p-4 animate-fadeIn">
                      <div className="grid gap-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex flex-col gap-1 p-3 rounded-lg hover:bg-[#2D2B3D] transition-colors"
                          >
                            <span className="text-sm font-medium text-white">{child.name}</span>
                            <span className="text-xs text-gray-400">{child.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="#"
                className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                Log In
              </Link>
              <Link
                href="#"
                className="px-4 py-2 text-sm bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg hover:from-purple-500 hover:to-purple-400 transition-all"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1A1825] border-t border-[#2D2B3D]">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex gap-3">
                <Link
                  href="#"
                  className="flex-1 px-4 py-2 text-center text-sm text-gray-300 border border-gray-600 rounded-lg hover:text-white transition-colors"
                >
                  Log In
                </Link>
                <Link
                  href="#"
                  className="flex-1 px-4 py-2 text-center text-sm bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
