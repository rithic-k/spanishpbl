
"use client";
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { label: 'Inicio', href: '#introduction' },
  { label: 'Deportes', href: '#sports' },
  { label: 'Futuro', href: '#future' },
];

export function AppHeader() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" } // Highlights when section is in middle of viewport
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  const NavLinks = ({ onItemClick }: { onItemClick?: () => void }) => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={onItemClick}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            activeSection === item.href.substring(1)
              ? 'bg-primary text-primary-foreground'
              : 'text-foreground hover:bg-accent hover:text-accent-foreground'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-primary">España Deportes</span>
        </Link>
        <nav className="hidden md:flex space-x-2">
          <NavLinks />
        </nav>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background">
              <div className="flex flex-col space-y-6 p-6">
                <Link href="/" className="flex items-center space-x-2 self-start" onClick={() => setIsSheetOpen(false)}>
                   <span className="font-bold text-xl text-primary">España Deportes</span>
                </Link>
                <nav className="flex flex-col space-y-4">
                   <NavLinks onItemClick={() => setIsSheetOpen(false)} />
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

