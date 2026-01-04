'use client';

import {Menu, X} from "lucide-react";
import {useState} from "react";
import Link from "next/link";
import LanguageSwitch from "@/components/LanguageSwitch";

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header>
            <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="font-display text-2xl font-black text-neutral-900 flex items-center gap-3 transition-opacity hover:opacity-75 flex-shrink-0">
                        <div className="w-2 h-8" style={{ backgroundColor: '#a4ac86' }} />
                        <span className="hidden sm:inline">BLOG</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/blog" className="text-sm font-bold uppercase tracking-wider text-neutral-700 hover:text-[#a4ac86] transition-colors duration-200">
                            Articles
                        </Link>
                        <Link href="/about" className="text-sm font-bold uppercase tracking-wider text-neutral-700 hover:text-[#a4ac86] transition-colors duration-200">
                            About
                        </Link>
                    </div>

                    {/* Desktop Controls */}
                    <div className="hidden md:flex items-center gap-4">
                        <LanguageSwitch />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 transition-colors hover:text-[#a4ac86]"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-neutral-200 bg-white">
                        <div className="px-6 py-4 space-y-4">
                            <Link
                                href="/blog"
                                className="block text-sm font-bold uppercase tracking-wider text-neutral-700 hover:text-[#a4ac86] transition-colors duration-200 py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Articles
                            </Link>
                            <Link
                                href="/about"
                                className="block text-sm font-bold uppercase tracking-wider text-neutral-700 hover:text-[#a4ac86] transition-colors duration-200 py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                            <div className="border-t border-neutral-200 pt-4 flex items-center gap-4">
                                <LanguageSwitch />
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
