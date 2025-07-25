import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Gavel, Landmark, Scale, Shield, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://placehold.co/1800x1000.png"
          alt="Law office interior"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 brightness-100"
        />
        <div className="relative z-10 flex flex-col items-center px-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold drop-shadow-md">
            Your Legal Shield Since 1986
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Providing expert regulatory, advisory, and dispute resolution services for over three decades.
          </p>
        </div>
      </section>
      
      <section id="intro" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">A Legacy of Excellence</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
            SRB Law Partners, established in 1986, is a full-service law firm based in Delhi. We have built a reputation for integrity, expertise, and unwavering commitment to quality. Our multidisciplinary team of seasoned legal professionals provides comprehensive services to a diverse clientele including individuals, corporates, banks, and financial institutions.
          </p>
        </div>
      </section>
    </div>
  );
}
