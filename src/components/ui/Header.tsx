"use client"; 
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; 

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "#" },
  ];

  // Function to close the mobile menu when a link is clicked
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="mx-auto flex max-w-[90rem] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* 1. Brand Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span>
            <img src="/navLogo2.png" alt="Code Warriors Logo" className="h-12 w-12 rounded-lg" />
          </span>
          <span className="hidden md:block font-syne lg:text-lg font-bold text-gray-900">
            Code Warriors Tech
          </span>
        </Link>

        {/* 2. Desktop Navigation  */}
        <nav className="hidden lg:flex lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-inter text-md font-medium text-gray-600 transition-colors hover:text-brand-purple"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* 3. Desktop CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          {/* CTA Button  */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="rounded-md bg-purple-700 px-6 py-2.5 text-md font-bold text-white shadow-sm transition hover:bg-purple-500"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle Button (Hidden on desktop) */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="h-6 w-6" /> // Show 'X' if open
            ) : (
              <FiMenu className="h-6 w-6" /> // Show 'Hamburger' if closed
            )}
          </button>
        </div>
      </div>

      {/* 4. Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-6 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu} // Close menu when user navigates
                className="font-inter block text-base font-medium text-gray-800 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-4 block w-full rounded-md bg-blue-600 px-4 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-blue-500"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}