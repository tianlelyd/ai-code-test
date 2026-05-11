"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Navbar() {
    const [hoveredNav, setHoveredNav] = useState<string | null>(null);

    const videoModels = ["Pollo 2.0", "Kling AI", "Veo 3", "Sora 2", "Runway Gen-3", "Luma Dream Machine", "MiniMax", "Vidu AI"];
    const imageModels = ["Midjourney", "Flux AI", "Dall-E 3", "Stable Diffusion 3", "Ideogram 2", "Recraft V3"];

    return (
        <div id="header-container" className="border-border-secondary sticky top-0 z-50 w-full -mb-[52px] bg-black/80 backdrop-blur-md">
            <header className="relative">
                <div style={{ height: "52px" }} className="flex items-center justify-between px-4 lg:pr-8 xl:gap-5">
                    <div className="flex items-center gap-4">
                        {/* Logo Placeholder */}
                        <Link href="/" className="relative flex items-center font-bold text-xl text-white">
                            <span className="text-primary mr-1">Pollo</span> AI
                        </Link>
                    </div>

                    <div className="flex items-center gap-x-4 gap-y-3 xl:gap-6 2xl:gap-8">
                        <div className="hidden items-center text-sm xl:flex xl:gap-6 2xl:gap-8 2xl:text-base">
                            <Link href="#" className="hover:text-primary text-white transition">Home</Link>

                            {/* Video AI Dropdown */}
                            <div
                                className="relative group h-[52px] flex items-center"
                                onMouseEnter={() => setHoveredNav("video")}
                                onMouseLeave={() => setHoveredNav(null)}
                            >
                                <button className="hover:text-primary text-white transition flex items-center gap-1">
                                    Video AI <ChevronDown className="w-3 h-3" />
                                </button>
                                <AnimatePresence>
                                    {hoveredNav === "video" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-[48px] left-0 w-64 bg-[#16141F] border border-white/10 rounded-xl p-4 shadow-xl grid gap-2"
                                        >
                                            {videoModels.map((model) => (
                                                <Link key={model} href="#" className="text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded px-2 py-1.5 transition">
                                                    {model}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Image AI Dropdown */}
                            <div
                                className="relative group h-[52px] flex items-center"
                                onMouseEnter={() => setHoveredNav("image")}
                                onMouseLeave={() => setHoveredNav(null)}
                            >
                                <button className="hover:text-primary text-white transition flex items-center gap-1">
                                    Image AI <ChevronDown className="w-3 h-3" />
                                </button>
                                <AnimatePresence>
                                    {hoveredNav === "image" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-[48px] left-0 w-64 bg-[#16141F] border border-white/10 rounded-xl p-4 shadow-xl grid gap-2"
                                        >
                                            {imageModels.map((model) => (
                                                <Link key={model} href="#" className="text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded px-2 py-1.5 transition">
                                                    {model}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link href="#" className="hover:text-primary text-white transition">Supported Video Models</Link>

                            <Link href="#" className="hover:text-primary text-white transition">API</Link>
                            <Link href="#" className="hover:text-primary text-white transition">Pricing</Link>
                        </div>

                        <div className="flex items-center gap-4">
                            <Link href="#" className="hover:text-primary text-white text-sm">Login</Link>
                            <Button className="rounded-full bg-white text-black hover:bg-white/90 text-xs font-semibold px-5 h-8">
                                Start for Free
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
