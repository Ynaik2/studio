import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppImage from '@/components/AppImage';

const areas = [
  { imageUrl: '/restructuring.png', title: 'Corporate Restructuring and Insolvency'},
  { imageUrl: '/banking.jpg', title: 'Banking and Finance (Securitisation, Asset Reconstruction, consortium banking, Debt Restructuring)'},
  { imageUrl: '/corporate commercial advisory.jpg', title: 'Corporate Commercial Advisory'},
  { imageUrl: '/Dispute.jpg', title: 'Dispute Resolution and Arbitration'},
  { imageUrl: '/TAX LAW.jpg', title: 'Taxation'},
  { imageUrl: '/EMPLOYMENT LAW.jpg', title: 'Employment Laws'},
  { imageUrl: '/SECURITIES MARKET.jpg', title: 'Securities Law / Capital Market'},
  { imageUrl: '/PROPERTY LAW.jpg', title: 'Property Law'},
  { imageUrl: '/CONSUMER IMAGES.jpg', title: 'Consumer Protection Law'},
  { imageUrl: '/FAMILY LAW.jpg', title: 'Family and Matrimonial Law'},
  { imageUrl: '/contract.jpg', title: 'Contract and Insurance Law'},
  { imageUrl: '/RESEARCH ADVISORY.jpg', title: 'Research and Advisory'},
  { imageUrl: '/envo law.jpg', title: 'Environmental Law'},
  { imageUrl: '/CONSTITUTIONAL LAW.jpg', title: 'Constitutional Law'},
  { imageUrl: '/iprrr.jpg', title: 'Intellectual Property Rights'},
];

export default function PracticeAreasPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Our Practice Areas</h1>
          <p className="mt-8 max-w-7xl mx-auto text-lg text-muted-foreground text-justify">
            We have expertise and experience in multiple jurisdictions of Laws. <br/><br/> Our firm has distinct experience in Corporate and General Litigation irrespective of its level and forum, Corporate Consultancy and Alternate Dispute Resolutions (ADR). As far as litigation is concerned, we practice law at every forum and at every possible area of law, which suits the needs and requirements of our clients. Ultimately to serve the client and to secure relief/justice for them within the limits of the law is our core aim. Litigation, Corporate Advisory and Arbitration (ADR) are our key areas of practice. We primarily practice before the Supreme Court of India, High Courts National & State Commissions as well as Tribunals, NCLT across its benches, NCLAT-New Delhi & Arbitrators across the country. We are organized to practice in all varieties of law fields including civil law, criminal law, family law, intellectual property rights law, baking and finance law, corporate law, consumer law, competition law, real-estate and infrastructure law, Industrial and labour law, company law, compliances of ROC, incorporation of a company in India and abroad, joint ventures, Insolvency and Bankruptcy (IBC), mergers and amalgamations, acquisitions, debt recovery (DRT), SARFAESI & RDDBFI laws, Service law, election law, administrative law, constitutional law, contract law, cyber law, POCSO, NDPS law, Prevention of Corruption law, Money-Laundering law (PMLA), chit fund, regulations related to RBI & SEBI etc. We provide legal services for individuals as well as for a company/firm, who face any number of legal hurdles, falling under any field of law. Our main agenda is to help our clients to easily walk through the trials of their lives with our guidance.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <Card key={area.title} className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl group">
              <CardContent className="p-4 flex items-center gap-4">
                 <div className="relative h-16 w-16 flex-shrink-0">
                    <AppImage
                    src={area.imageUrl}
                    alt={area.title}
                    layout="fill"
                    className="transition-transform duration-300 group-hover:scale-110 object-cover"
                    />
                </div>
                <CardTitle className="font-headline text-base leading-tight">{area.title}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
