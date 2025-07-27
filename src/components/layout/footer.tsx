import Link from 'next/link';
import { Scale, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'The Team' },
  { href: '/practice-areas', label: 'Practice Areas' },
  { href: '/contact', label: 'Contact' },
];

const officeDetails = {
    address: 'House No. 103, Golf Links, New Delhi, 110003',
    phone: '+91 9810024119',
    email: 'srblawpartners@gmail.com'
}

export function Footer() {
  return (
    <footer className="bg-secondary/50 text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
                <div className="flex items-center gap-2 mb-4">
                    <Link href="/" >
                      <Image src="/footer.png" alt="SRB Law Partners Logo" width={225} height={50} className="h-24 w-auto"/>
                    </Link>
                </div>
            </div>

            <div className="md:col-span-2">
                <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
                <nav className="flex flex-col gap-2">
                    {quickLinks.map((link) => (
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

            <div className="md:col-span-1"></div>

            <div className="md:col-span-4">
                <h3 className="font-headline text-lg font-semibold mb-4">Our Offices</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                        <span>{officeDetails.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                        <a href={`mailto:${officeDetails.email}`} className="hover:text-primary transition-colors">{officeDetails.email}</a>
                    </div>
                     <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                        <a href={`tel:${officeDetails.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">{officeDetails.phone}</a>
                    </div>
                </div>
                <Link href="/contact" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-4">
                    More offices <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SRB Law Partners. All Rights Reserved. Developed by Yashas Naik</p>
        </div>
      </div>
    </footer>
  );
}
