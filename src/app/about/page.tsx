import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import AppImage from '@/components/AppImage';

const teamMembers = [
  {
      name: 'D.K. SACHAR',
      specialty: 'Founder and Chief Executive Officer',
      imageUrl: '/about/dk-sachar.jpg',
      description: 'B.Sc. (H) (Delhi University), M.Sc. (Delhi University), M.B.A. (Faculty of Management Studies, Delhi University) and LL.B. (Faculty of Law, Delhi University). <br/><br/> Enrolled as Member of Bar Council of Delhi since 1986 and Member of Supreme Court Bar Association, Delhi High Court Bar Association, Debt Recovery Tribunal Bar Association, National Company Law Tribunal Association. <br/><br/> Started his career as Legal Compliance Officer in Leading Nationalised Bank of India and took plunge to establish his own Law Offices by the name of D.K. Sachar and Associates. <br/><br/> He is one of the eldest and most experienced legal counsels in the banking industry and has secured a distinguished and eminent name in Debt Recovery Matters before Hon’ble High Court of Delhi, Debt Recovery Appellate Tribunal and Debt Recovery Tribunal since its inception in 1994. With Four Decades of experience in banking law and industry, he is go to man in Bank Guarantee matter, Writ Petition, Recovery suits, Securitisation Proceedings and Dishonour of Cheques. He has been representing leading Public and Private Limited companies like United Group, Weston Electronics, Chandmal Investments Group, Asian Consolidated, Warner Multimedia, Silicon Valley Infotech, ATN Arihant International, Asian Global, Satsuvan Paper Mills, Diamond Calender Punjabi Press, etc. on variety of forums.'
  },{
      name: 'V.K. BATRA',
      specialty: 'Founder and Chief Financial Officer',
      imageUrl: '/about/vk-batra.jpg',
      description: 'B.A. (Economics) (H) Saint Stephen College (Delhi University) <br/><br/> Qualified as a Chartered Accountant in year 1976 and as a fellow member in 1981, <br/><br/> Fellow Member of the Institute of Company Secretary of India. <br/><br/> Graduated with First Class (First Division) in Honors degree in Economics in 1973 <br/><br/> Alumnus of Reputed Modern School Barakhamba Road, New Delhi with Position Holder in All India Merit List <br/><br/> He heads the Compliance Audit and Due Diligence team of our firm. His knowledge as qualified chartered accountant is advantageous in complex, high profile, legal and tax transaction. He advises clients on incorporation/obtaining various licenses, approvals, permissions, etc; in compliance of various laws or conducting legal audit for their compliance. Drafting, negotiation and finalization of various vendor contracts, services contracts, etc., conducting Due Diligence assignments on behalf of various clients, relating to purchase and sale of assets by corporate entities, merger or takeover of companies including financing or offering credit facilities to customers of various Financial Institutions.'
  },{
      name: 'SUMEET BATRA',
      specialty: 'Founder and Managing Partner',
      imageUrl: '/about/sumeet-batra.jpg',
      description: 'B. Com. (H) (Delhi University), LL.B. (Faculty of Law, Delhi University), LL.M. (Delhi University) <br/><br/> Alumnus of reputed Modern School, Delhi. <br/><br/> Enrolled as Member of Bar Council of Delhi since 2007 and Member of Supreme Court Bar Association, Delhi High Court Bar Association, Debt Recovery Tribunal Bar Association, National Company Law Tribunal Bar Association. <br/><br/> Has vast experience of handling various facets of litigation before the Hon’ble Supreme Court of India, Hon’ble High Court of Delhi and various  judicial and quasi judicial tribunals / forums like National Consumer Dispute Redressal Commission, National Company Law Tribunal, State Consumer Dispute Redressal Commission, Central Administrative Tribunal, Debt Recovery Appellate Tribunal, Debt Recovery Tribunal and various other adjudicatory authorities in various fields of law including civil law, commercial law, corporate law, property law, constitutional law, etc. <br/><br/> Has been regularly involved in handling and contesting variety of cases including Writ Petitions under Article 32 and Article 226 of Constitution of India, Special Leave Petition, Consumer Dispute Redressal Petition, Suits for Recovery, Partition, Injunction, Specific Performance of Contract, Company Law petitions including Winding up petitions, Scheme of Arrangement, Amalgamation, Mergers and De mergers, Petition under Article 227 of Constitution of India, Transfer Petitions, Service Law matters, Bank Guarantee matters, Arbitration matters, etc. <br/><br/> Presently on the esteemed panel of Punjab National Bank, Karnataka Bank Limited, Karur Vyasya Bank, Punjab and Sind Bank, Canara Bank, Ramgarhia Cooperative Bank, All India Management Association, etc. <br/><br/> Sumeet Batra has been appointed as standing counsel of Punjab and Sind Bank.'
  },{
      name: 'DR. ROOPANSHI SACHAR BATRA',
      specialty: 'Founder and Managing Partner',
      imageUrl: '/about/roopanshi-batra.jpg',
      description: `LL.B. (H) (Gold Medalist), LL.M. (Corporate Law) (Gold Medalist), Ph. D. (Corporate Law), N.E.T. and J.R.F. (Rank Holder) <br/><br/> Enrolled with Bar Council of Delhi since 2010. <br/><br/> A Merit Scholar with extensive research background and impeccable academic record. <br/><br/> In law, building up a case is as important as fighting a case which requires a correct approach, dedication, experience, knowledge and competence. She formulates case strategies and writes credible legal briefs with her detail-oriented and meticulous approach. She handles cases with an analytical attitude and is adept at managing a large caseload easily and proficiently. <br/><br/> Being a doctorate in securities and corporate law, she has experience and knowledge in share sales / acquisitions / issuances, business transfers, joint ventures, insider trading, takeovers, etc. She is also known for her expertise in listed company matters such as the Listing Regulations, Takeover Regulations, Mergers/Demergers, Amalgamation, Due diligences, etc. She has also been advising corporate clients on day to day legal issues across varied subject matters, including corporate governance and compliance, securities law and data privacy. She has experience in pre vetting and vetting of loan and security documents in consortium advances and legal audit for Banks and Financial institutions and drafting, documentation and conveyancing of Deeds like agreement to sell, sale deeds, will, power of attorney, lease deed, joint venture agreement, business purchase agreement, shareholder agreement, collaboration agreement etc. for individual and corporate clients. <br/><br/> Apart from rendering professional contribution, she has been a Professor (Assistant) of Law at the Faculty of Law, University of Delhi and Amity Law College, Delhi on Family Law and Banking and Insurance Law. <br/><br/> She has authored several articles which have been published in various international and referred journals some of which are as follows: “Regulation of Insider Trading in India: Dissecting the difficulties and Solution Ahead” in Journal on Contemporary Issues of Law (Volume No. 2, Issue No. 11),”Insider Trading Laws in India: Status before and after enactment of SEBI (Prohibition of Insider Trading) Regulations, 2015 in International Journal of Legal Development and Allied Issues (Volume No. 3, Issue No. 1); “Highlights about Thesis on Insider Trading” in Religion and Law Review (Volume No. 27, Issue No. 1), etc.`
  }
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">About Us</h1>
          <p className="mt-4 max-w-5xl mx-auto text-lg text-muted-foreground">
          Our team is a mix of well qualified and experienced lawyers, chartered accountants and management consultations joining hands to work together with a high degree of professionalism and responsiveness.
          </p>
        </div>
        <div className="mx-auto space-y-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="overflow-hidden transition-all duration-300 ease-in-out text-center p-6 md:p-8 border-2 border-primary hover:border-4">
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 bg-white">
                  <AppImage
                    src={member.imageUrl}
                    alt={`Portrait of ${member.name}`}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover object-top translate-y-[12.5%] bg-white"
                  />
                </div>
              </div>
              <CardHeader className="p-0">
                <CardTitle className="font-headline text-2xl">{member.name}</CardTitle>
                <CardDescription className="text-primary font-semibold text-base pt-1">{member.specialty}</CardDescription>
              </CardHeader>
              <CardContent className="pt-4 px-0 pb-0">
                <p  className="text-muted-foreground text-justify"  dangerouslySetInnerHTML={{ __html: member.description }}></p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
