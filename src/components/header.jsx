"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AuthModal from "./auth/auth-modal";
import { LogIn } from "lucide-react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-sm">
                <div className="container mx-auto px-4 py-5 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold text-white flex items-center">
                        <Image src="/assets/logo/logo.png" alt="Logo" width={100} height={100} />
                    </Link>

                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-white hover:text-black text-sm font-normal">HOME</Link>
                        <Link href="/about" className="text-white hover:text-black text-sm font-normal">ABOUT</Link>
                        <Link href="/agent" className="text-white hover:text-black text-sm font-normal">AGENT</Link>
                        <Link href="/builder" className="text-white hover:text-black text-sm font-normal">BUILDER</Link>
                        <Link href="/property-search" className="text-white hover:text-black text-sm font-normal">CUSTOMER</Link>
                        <button
                            onClick={() => setOpen(true)}
                            className="bg-white text-black px-4 py-1.5 rounded text-sm font-medium cursor-pointer"
                        >
                            LOG IN
                        </button>
                    </nav>

                    <button
                        className="md:hidden text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {menuOpen && (
                    <div className="md:hidden bg-black/80 px-6 pb-4 pt-2 space-y-4 text-center">
                        <Link href="/" className="block text-white hover:text-black text-sm font-normal">HOME</Link>
                        <Link href="/about" className="block text-white hover:text-black text-sm font-normal">ABOUT</Link>
                        <Link href="/agent" className="block text-white hover:text-black text-sm font-normal">AGENT</Link>
                        <Link href="/builder" className="block text-white hover:text-black text-sm font-normal">BUILDER</Link>
                        <Link href="/property-search" className="block text-white hover:text-black text-sm font-normal">CUSTOMER</Link>
                        <button
                            onClick={() => setOpen(true)}
                            className="inline-flex items-center bg-white text-black px-4 py-1.5 rounded text-sm font-medium"
                        >
                            <LogIn className="w-4 h-4" />
                        </button>
                    </div>
                )}
            </header>

            <AuthModal isOpen={open} onClose={() => setOpen(false)} />

        </>
    )
}

export default Header