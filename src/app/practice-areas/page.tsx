import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Landmark, Gavel, Users, Calculator, TrendingUp, Home, ClipboardCheck, Scale, HeartHandshake } from 'lucide-react';
import type { ReactNode } from 'react';

const areas = [
  { icon: <Briefcase className="h-8 w-8 text-primary" />, title: 'Corporate Restructuring & Insolvency' },
  { icon: <Landmark className="h-8 w-8 text-primary" />, title: 'Banking & Finance' },
  { icon: <Gavel className="h-8 w-8 text-primary" />, title: 'Dispute Resolution & Arbitration' },
  { icon: <Users className="h-8 w-8 text-primary" />, title: 'Employment Law' },
  { icon: <Calculator className="h-8 w-8 text-primary" />, title: 'Taxation' },
  { icon: <TrendingUp className="h-8 w-8 text-primary" />, title: 'Capital Markets' },
  { icon: <Home className="h-8 w-8 text-primary" />, title: 'Property Law' },
  { icon: <ClipboardCheck className="h-8 w-8 text-primary" />, title: 'Compliance & Due Diligence' },
  { icon: <Scale className="h-8 w-8 text-primary" />, title: 'Constitutional Law' },
  { icon: <HeartHandshake className="h-8 w-8 text-primary" />, title: 'Matrimonial Law' },
];

export default function PracticeAreasPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Practice Areas</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We offer a comprehensive range of legal services tailored to meet the diverse needs of our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {areas.map((area) => (
            <Card key={area.title} className="flex flex-col items-center justify-center text-center p-6 h-48 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-primary">
              <div className="mb-4">{area.icon}</div>
              <h2 className="font-headline text-lg font-semibold">{area.title}</h2>
            </Card>
          ))}
        </div>
        <div className="mt-16 md:mt-24 text-center">
            <Card className="max-w-4xl mx-auto p-8 bg-secondary/50 border-primary border-l-4">
                <p className="text-lg md:text-xl font-semibold text-foreground">
                “We represent clients across all legal forums including the Supreme Court, various High Courts, National Company Law Tribunals (NCLT), Debt Recovery Tribunals (DRT), and through Arbitration Panels nationwide.”
                </p>
            </Card>
        </div>
      </div>
    </div>
  );
}
