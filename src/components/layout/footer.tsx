import Link from 'next/link';
import { Scale } from 'lucide-react';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/practice-areas', label: 'Practice Areas' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Scale className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-bold">SRB Law Partners</span>
          </div>
          <nav className="flex gap-4 mb-4 md:mb-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SRB Law Partners. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
