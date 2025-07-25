import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Gavel, Landmark, Scale, Shield, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

const practiceAreas: { icon: ReactNode; title: string; href: string }[] = [
  { icon: <Briefcase className="h-10 w-10" />, title: 'Corporate & Insolvency', href: '/practice-areas' },
  { icon: <Landmark className="h-10 w-10" />, title: 'Banking & Finance', href: '/practice-areas' },
  { icon: <Gavel className="h-10 w-10" />, title: 'Dispute Resolution', href: '/practice-areas' },
  { icon: <Users className="h-10 w-10" />, title: 'Employment Law', href: '/practice-areas' },
];

const whyChooseUsItems = [
  {
    icon: <Scale className="h-8 w-8 text-primary" />,
    title: 'Decades of Experience',
    description: 'Established in 1986, our firm possesses a deep-rooted history of legal excellence and client success.',
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Multidisciplinary Team',
    description: 'Our diverse team of experts collaborates to provide comprehensive solutions for complex legal challenges.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Client-Centric Approach',
    description: 'We are committed to understanding our clients\' needs and delivering tailored, high-quality legal services.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://placehold.co/1800x1000.png"
          alt="Law office interior"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 brightness-50"
          data-ai-hint="law office"
        />
        <div className="relative z-10 flex flex-col items-center px-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold drop-shadow-md">
            Your Legal Shield Since 1986
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Providing expert regulatory, advisory, and dispute resolution services for over three decades.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
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

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Choose Us</h2>
            <p className="text-muted-foreground mt-2">Trust, Expertise, and Professionalism You Can Rely On.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUsItems.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center p-6">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-headline text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="practice-areas" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Expertise</h2>
            <p className="text-muted-foreground mt-2">Comprehensive legal solutions across various domains.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {practiceAreas.map((area) => (
              <Link href={area.href} key={area.title} className="group">
                <Card className="text-center h-full transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                  <CardHeader className="items-center">
                    <div className="p-4 bg-primary/10 rounded-full text-primary">
                      {area.icon}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-headline text-xl font-semibold">{area.title}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/practice-areas">Explore All Practice Areas</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
