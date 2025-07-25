import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const areas = [
  { imageUrl: 'https://placehold.co/400x300.png', title: 'Corporate Restructuring & Insolvency', hint: 'corporate insolvency' },
  { imageUrl: 'https://placehold.co/400x300.png', title: 'Banking & Finance', hint: 'banking finance' },
  { imageUrl: 'https://placehold.co/400x300.png', title: 'Dispute Resolution & Arbitration', hint: 'gavel courtroom' },
  { imageUrl: 'https://placehold.co/400x300.png', title: 'Employment Law', hint: 'employment contract' },
  { imageUrl: 'https://placehold.co/400x300.png', title: 'Taxation', hint: 'tax forms' },
  { imageUrl: 'https://placehold.co/400x300.png', title: 'Capital Markets', hint: 'stock market' },
  { imageUrl: 'https://placehold.co/400x300.png', title: 'Property Law', hint: 'house keys' },
  { imageUrl: 'https://placehold.co/400x300.png', title: 'Compliance & Due Diligence', hint: 'legal compliance' },
  { imageUrl: 'https://placehold.co/400x300.png', title: 'Constitutional Law', hint: 'constitution document' },
  { imageUrl: 'https://placehold.co/400x300.png', title: 'Matrimonial Law', hint: 'wedding rings' },
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
            <Card key={area.title} className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl group">
              <div className="relative h-48">
                <Image
                  src={area.imageUrl}
                  alt={area.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                  data-ai-hint={area.hint}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-lg h-16">{area.title}</CardTitle>
              </CardHeader>
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
