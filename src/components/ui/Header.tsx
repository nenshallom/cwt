"use client"; 
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; 
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "/contact" },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="mx-auto flex max-w-[90rem] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* 1. Brand Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span>
            <img src="/navLogo2.png" alt="Code Warriors Logo" className="h-12 w-12 rounded-lg" />
          </span>
          <span className="hidden md:block font-syne lg:text-lg font-bold text-brand-indigo">
            Code Warriors Tech
          </span>
        </Link>

        {/* 2. Desktop Navigation  */}
        <nav className="hidden lg:flex lg:gap-8">
          {navLinks.map((link) => {
            // Check if this specific link is the active page
            const isActive = pathname === link.href;
            
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-inter text-md font-medium transition-colors hover:text-brand-purple ${
                  isActive ? "text-brand-purple" : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="">
          {/* Mobile Menu Toggle Button (Hidden on desktop) */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="h-6 w-6" /> 
            ) : (
              <FiMenu className="h-6 w-6" /> 
            )}
          </button>
        </div>
      </div>

      {/*  Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-6 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              // Check active state for the mobile menu links as well
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu} 
                  className={`font-inter block text-base font-medium hover:text-brand-purple ${
                    isActive ? "text-brand-purple" : "text-gray-800"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}