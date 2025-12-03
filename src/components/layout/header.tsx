'use client';

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Code } from "lucide-react";
import React, { useState, useEffect, MouseEvent, Dispatch, SetStateAction } from 'react';

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Logo = () => (
  <Link href="/" className="flex items-center space-x-2">
    <Code className="h-6 w-6 text-primary" />
    <span className="font-bold font-headline text-lg">shivamghaware</span>
  </Link>
);

interface NavLinkProps {
  item: NavItem;
  activeLink: string;
  onClick: (e: MouseEvent<HTMLAnchorElement>, href: string) => void;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ item, activeLink, onClick, className }) => (
  <Link
    href={item.href}
    className={`transition-colors hover:text-primary ${activeLink === item.href ? 'text-primary font-bold' : ''} ${className}`}
    onClick={(e) => onClick(e, item.href)}
  >
    {item.label}
  </Link>
);

interface DesktopNavProps {
  activeLink: string;
  handleLinkClick: (e: MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ activeLink, handleLinkClick }) => (
  <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
    {navItems.map((item) => (
      <NavLink key={item.label} item={item} activeLink={activeLink} onClick={handleLinkClick} />
    ))}
  </nav>
);

interface MobileNavProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  activeLink: string;
  handleLinkClick: (e: MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ open, setOpen, activeLink, handleLinkClick }) => {
  const handleMobileLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    handleLinkClick(e, href);
    setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
          <SheetDescription className="sr-only">A list of navigation links for the portfolio site.</SheetDescription>
          <div className="grid gap-4 py-6">
            <Logo />
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                item={item}
                activeLink={activeLink}
                onClick={handleMobileLinkClick}
                className="flex w-full items-center py-2 text-lg font-semibold"
              />
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#about');

  useEffect(() => {
    const sections = navItems.map(item => document.querySelector(item.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );
    sections.forEach(section => {
      if (section) observer.observe(section);
    });
    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveLink(href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <DesktopNav activeLink={activeLink} handleLinkClick={handleLinkClick} />
        <MobileNav open={open} setOpen={setOpen} activeLink={activeLink} handleLinkClick={handleLinkClick} />
      </div>
    </header>
  );
};

export default Header;
