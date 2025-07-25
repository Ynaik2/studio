import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'D.K. Sachar',
    specialty: 'Banking Law, Debt Recovery',
    imageUrl: 'https://placehold.co/400x400.png',
    aiHint: 'male lawyer portrait',
    description: 'D.K. Sachar is a seasoned expert in banking law and debt recovery, with decades of experience representing major financial institutions. His strategic approach has led to numerous successful outcomes in complex litigation.'
  },
  {
    name: 'V.K. Batra',
    specialty: 'Compliance, Due Diligence',
    imageUrl: 'https://placehold.co/400x400.png',
    aiHint: 'male lawyer portrait',
    description: 'V.K. Batra leads the compliance and due diligence team, ensuring clients navigate regulatory landscapes with confidence. His meticulous attention to detail is invaluable for corporate clients.'
  },
  {
    name: 'Sumeet Batra',
    specialty: 'Litigation, Corporate & Constitutional Law',
    imageUrl: 'https://placehold.co/400x400.png',
    aiHint: 'male lawyer portrait professional',
    description: 'Sumeet Batra is a formidable presence in the courtroom, specializing in high-stakes litigation and constitutional law. He is known for his sharp legal acumen and dedication to his clients.'
  },
  {
    name: 'Dr. Roopanshi S. Batra',
    specialty: 'Corporate & Securities Law',
    imageUrl: 'https://placehold.co/400x400.png',
    aiHint: 'female lawyer portrait',
    description: 'Dr. Roopanshi S. Batra brings a deep academic and practical understanding to corporate and securities law. Her expertise is sought after for complex transactions and corporate structuring.'
  },
  {
    name: 'Richa Naik',
    specialty: 'Finance, ADR, Matrimonial Law',
    imageUrl: 'https://placehold.co/400x400.png',
    aiHint: 'female lawyer portrait professional',
    description: 'Richa Naik offers a compassionate yet firm approach to matrimonial law, while also being a skilled negotiator in alternative dispute resolution and financial matters. She is committed to achieving the best possible outcomes for her clients.'
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Esteemed Partners</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Meet the dedicated and experienced legal minds at the heart of SRB Law Partners.
          </p>
        </div>
        <div className="mx-auto space-y-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl text-center p-6 md:p-8">
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src={member.imageUrl}
                    alt={`Portrait of ${member.name}`}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    data-ai-hint={member.aiHint}
                  />
                </div>
              </div>
              <CardHeader className="p-0">
                <CardTitle className="font-headline text-2xl">{member.name}</CardTitle>
                <CardDescription className="text-primary font-semibold text-base pt-1">{member.specialty}</CardDescription>
              </CardHeader>
              <CardContent className="pt-4 px-0 pb-0">
                <p className="text-muted-foreground text-justify">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
