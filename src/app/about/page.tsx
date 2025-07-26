import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';

const teamMembers = [
  {
      name: 'D.K. SACHAR',
      specialty: 'Founder and Chief Executive Officer',
      imageUrl: 'https://placehold.co/400x400.png',
      description: 'B.Sc. (H) (Delhi University), M.Sc. (Delhi University), M.B.A. (Faculty of Management Studies, Delhi University) and LL.B. (Faculty of Law, Delhi University). <br/><br/> Enrolled as Bar Council of Delhi Member since 1986 and Member of Supreme Court Bar Association, Delhi High Court Bar Association, Debt Recovery Tribunal Bar Association, National Company Law Tribunal Association. <br/><br/> Started his career as Legal Compliance Officer in Leading Nationalised Bank of India and took plunge to establish his own Law Offices by the name of D.K. Sachar and Associates. <br/><br/> He is one of the oldest and most experienced legal counsels in the banking industry and has secured a distinguished and eminent name in Debt Recovery cases before High Court of Delhi, Debt Recovery Appellate Tribunal and Debt Recovery Tribunal since its inception in 1994. With more than three decades of experience in banking law and industry, he is go to man in Bank Guarantee matter, Writ Petition, Recovery suits, Securitisation Proceedings and Dishonour of Cheques. He has been representing leading Public and Private Limited companies like United Group, Weston Electronics, Chandmal Investments Group, Asian Consolidated, Warner Multimedia, Silicon Valley Infotech, ATN Arihant International, Asian Global, Satsuvan Paper Mills, Diamond Calender Punjabi Press, etc. as well as Nationalised and private sector banks like Punjab and Sind Bank, Punjab National Bank, Canara Bank, Rural Electrification Corporation, Ramgarhia Cooperative Bank on variety of forums.'
  },{
      name: 'V.K. BATRA',
      specialty: 'Founder and Chief Financial Officer',
      imageUrl: 'https://placehold.co/400x400.png',
      description: 'B.A. (Economics) (Delhi University), C.A., C.S. <br/><br/> Alumnus of Reputed Modern School, Delhi and the prestigious St. Stephen College, University of Delhi. <br/><br/> Completed Chartered Accountancy in year ..... and Chartered Secretary in year ........ <br/><br/> Enrolled with Institute of Chartered Accountancy of India since year....... <br/><br/> He heads the Compliance Audit and Due Diligence team of our firm. His knowledge as qualified chartered accountant is advantageous in complex, high profile, legal and tax transaction. He advises and assists clients on: Assistance in obtaining approval/clarification from FIPB/RBI, or other Governmental authorities; Assistance in incorporation of legal entities; Assistance in obtaining various registrations, licenses, approvals, permissions, etc.; Assistance in compliance of various laws/regulations; Assistance in secretarial compliance; Assistance in conducting legal audits; Drafting, negotiation and finalization of various vendor contracts, services contracts, etc., conducting Due Diligence assignments on behalf of various clients, relating to purchase and sale of assets by corporate entities, merger or takeover of companies including financing or offering credit facilities to customers of various Financial Institutions.'
  },{
      name: 'SUMEET BATRA',
      specialty: 'Founder and Managing Partner',
      imageUrl: 'https://placehold.co/400x400.png',
      description: 'B. Com. (H) (Delhi University), LL.B. (Faculty of Law, Delhi University), LL.M. (Delhi University) <br/><br/> Alumnus of reputed Modern School, Delhi. <br/><br/> Enrolled as Bar Council of Delhi Member since 2007 and Member of Supreme Court Bar Association, Delhi High Court Bar Association, Debt Recovery Tribunal Bar Association, National Company Law Tribunal Bar Association. <br/><br/> Started his professional journey with interships and gaining professional experience under Sh. Kirti Uppal, Senior Advocate and Ex- President, Delhi High Court Bar Association and Sh. J.P. Sengh, Senior Advocate and Ex- Vice President, Delhi High Court Bar Association. <br/><br/> Has vast experience of handling various facets of litigation before the Hon’ble Supreme Court of India, Hon’ble High Court of Delhi and various  judicial and quasi judicial tribunals / forums like National Consumer Dispute Redressal Commission, National Company Law Tribunal, State Consumer Dispute Redressal Commission, Central Administrative Tribunal, Debt Recovery Appellate Tribunal, Debt Recovery Tribunal and various other adjudicatory authorities in various fields of law including civil law, commercial law, corporate law, property law, constitutional law, etc. <br/><br/> Has been regularly involved in handling and contesting variety of cases including Writ Petitions under Article 32 and Article 226 of Constitution of India, Special Leave Petition, Consumer Dispute Redressal Petition, Suits for Recovery, Partition, Injunction, Specific Performance of Contract, Company Law petitions including Winding up petitions, Scheme of Arrangement, Amalgamation, Mergers and De mergers, Petition under Article 227 of Constitution of India, Transfer Petitions, Service Law matters, Bank Guarantee matters, Arbitration matters, etc. <br/><br/> Presently on the esteemed panel of New Delhi Municipal corporation, Punjab National Bank, Karnataka Bank Limited, Punjab and Sind Bank, Canara Bank, Ramgarhia Cooperative Bank, All India Management Association, etc.'
  },{
      name: 'DR. ROOPANSHI SACHAR BATRA',
      specialty: 'Founder and Managing Partner',
      imageUrl: 'https://placehold.co/400x400.png',
      description: `LL.B. (H) (Gold Medalist), LL.M. (Corporate Law) (Gold Medalist), Ph. D. (Corporate Law), N.E.T. and J.R.F. (Rank Holder) <br/><br/> Enrolled with Bar Council of Delhi since 2010. <br/><br/> A Merit Scholar with extensive research background and impeccable academic record. <br/><br/> In law, building up a case is as important as fighting a case which requires a correct approach, dedication, experience, knowledge and competence. She is highly efficient and veteran at formulating case strategies and writing credible legal briefs with her detail-oriented and meticulous approach. She handles cases with persistence and an analytical attitude and is adept at managing a large caseload easily and proficiently. <br/><br/> Being a doctorate in securities and corporate law, she has exhaustive experience and knowledge in share sales / acquisitions / issuances, business transfers, joint ventures, insider trading, takeovers, etc. She is also known for her expertise in listed company matters such as the Listing Regulations, Takeover Regulations, Mergers/Demergers, Amalgamation, Due diligences, etc. She has also been advising individual and corporate clients on day to day legal issues across varied subject matters, including corporate governance and compliance, securities law and data privacy. She has avid experience in pre vetting and vetting of loan and security documents in consortium advances and legal audit for Banks and Financial institutions and drafting, documentation and conveyancing of Deeds like agreement to sell, sale deeds, will, power of attorney, lease deed, joint venture agreement, business purchase agreement, shareholder agreement, collaboration agreement etc. for individual and corporate clients. <br/><br/> Apart from rendering professional contribution, she had been active in providing academic guidance to students pursuing law. She has been a Professor (Assistant) of Law at the Faculty of Law, University of Delhi and Amity Law College, Delhi on Family Law and Banking and Insurance Law. <br/><br/> She has authored several articles which have been published in various international and referred journals some of which are as follows: “Regulation of Insider Trading in India: Dissecting the difficulties and Solution Ahead” in Journal on Contemporary Issues of Law (Volume No. 2, Issue No. 11),”Insider Trading Laws in India: Status before and after enactment of SEBI (Prohibition of Insider Trading) Regulations, 2015 in International Journal of Legal Development and Allied Issues (Volume No. 3, Issue No. 1); “Highlights about Thesis on Insider Trading” in Religion and Law Review (Volume No. 27, Issue No. 1), etc.`
  },{
      name: 'RISHABH JAIN',
      specialty: 'Associate',
      imageUrl: 'https://placehold.co/400x400.png',
      description: 'Enrolled with Bar Council of Delhi since year 2022. <br/><br/> His current practice spans a wide spectrum of legal services with a specific focus on banking and financial laws and consumer protection laws. He has been doing independent appearances before the Hon’ble Debt Recovery Tribunal, Debt Recovery Appellate Tribunal, National Company Law Tribunal and Consumer Dispute Redressal Commission representing banks, individual and companies. <br/><br/> His forte is that he thrives in any dynamic environment and quickly adapts to the ever-changing demands of each and every client. One can praise him for a solution focused, practical approach and meeting the time frame for each legal task. His assistance in the law firm’s operation by way of evaluation of cases, performing client counselling and giving updates on court compliances makes him an asset to the firm.'
  },{
      name: 'CHANDAN JHA',
      specialty: 'Associate',
      imageUrl: 'https://placehold.co/400x400.png',
      description: 'Enrolled with Bar Council of Delhi since year 2017. <br/><br/> He is well versed in trial preparation and drafting legal documents and has specialised knowledge of both the legal framework as well as specific business requirements. He expresses excellent written skills and command over language in his pleadings, notices, briefs and case notes. As a member of the firm, he has specifically inculcated integrity and ethics as the guiding principles of his professional conduct. He has successfully demonstrated his analytical skills during drafting and vetting of Corporate Contracts and Agreements for our clients that have helped them during the lawsuit and also became the pivot on which the cases have been decided favourably for our clients. <br/><br/> His expertise is in continuous updation of the firm’s body of knowledge about the law relating to case in hand with identification and retrieval of information necessary to support the decision making in our favour. His greatest strength is ability to understand the spirit of the matter and advice the clients a practicable and business centric solution to the same while keeping in mind regulatory framework and legal requirements pertaining to the same. <br/><br/> Alongside, he is also proficient in making successful appearances before the civil courts and tribunals in Delhi on behalf of the firm on variety of matters relating to Property law, Employment and Service law, Banking law, Contract law, etc.'
  }
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="mt-4 max-w-5xl mx-auto text-lg text-muted-foreground">
          Our team is a mix of well qualified and experienced lawyers, chartered accountants and management consultations joining hands to work together with a high degree of professionalism and responsiveness.
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
