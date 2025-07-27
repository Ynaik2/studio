import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Gavel, Landmark, Scale, Shield, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full">
        <div className="w-full">
          <Image
            src="/20250726_181656.jpg"
            alt="Law office interior"
            layout="responsive"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain"
            data-ai-hint="law office interior"
          />
        </div>
      </section>
      
      <section id="intro" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-primary">A Legacy of Excellence</h2>
          <p className="max-w-full mx-auto text-muted-foreground text-lg text-justify mt-8" >
            Established in 1986, SRB Law Partners is a full service and multidisciplinary law firm in Delhi providing regulatory, advisory and dispute resolution services. It advises and assists its diverse clientele base including Individuals, Proprietorship, Companies (both national and international), Banks (Public and Private Sector), Financial Institutions and Public Sector Undertakings. The firm has been established with an aim to bring client’s interest into focus while rendering commercially acceptable and legally sound advice to our clientele. With a dedicated focus on quality, reliability and cost effectiveness, our firm has inculcated principles employed by the leading international law firms making us a dependable source of legal service. We, at SRB Law Partners, are very passionate about our work and endeavour to provide the best quality of legal services, keeping in mind our clients’ requirements. <br/><br/> We have an in-house highly qualified and responsible team of lawyers composed of a balanced combination of young as well as senior legal professionals who have attained wide expertise in multiple areas of law. Our senior partners are personally involved in every assignment and their focal point is on bringing together all their expertise and knowledge to provide the best possible legal solutions within the given time framework to our clients. We have intentionally preferred to remain a human-size firm to guarantee that the senior lawyers personally oversee and lead the dispute resolution while not compromising with the comfort and confidence of our clients. While the seniors are the torch bearers providing benefit of years of experience behind them, the young lawyers’ energy, enthusiasm and adaptability is also not given a miss. Collectively, they bring the highest level of professional service to clients along with the traditions of the profession, integrity and sound ethical practices. Our commitment is on recognizing the needs of our clients to every minute detail by appreciating their business specific requirement, ensuring that our service is theoretically faultless and practically in consonance with the latest judgments and rulings as well as amendment on the issue in hand. We take pride in our firm for being professional, dedicated, time conscious and cost effective. The firm since its establishment had made a clear choice to combine the knowledge of law with practice of ethical business conduct. Our values include: Client centric approach, integrity, efficiency, humility, partnership, changing with the change, and approachability.<br/><br/> Our promise to all our clients is to provide excellent legal advice and to consistently exceed their expectations at all forums and in every count. Every passing year has been memorable for us for its challenges and multitude of creative solutions that we provide to our clients and we look forward to many such opportunities.
          </p>
        </div>
      </section>
    </div>
  );
}
