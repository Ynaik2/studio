import { ContactForm } from '@/components/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

const contactDetails = [
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: 'Central Delhi Office',
    value: 'House No. 103, Golf Links, New Delhi – 110003',
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: 'South Delhi Office',
    value: 'Pocket C, House No. 575, Defence Colony, New Delhi – 110024',
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: 'North Delhi Office',
    value: 'Pocket C9, House No. 61, Sector 8, North Extension, Rohini, Delhi - 110085',
  }
];

const contactMethods = [
  {
    id: 'phone-1',  
    icon: <Phone className="h-6 w-6 text-primary" />,
      title: 'Phone',
      value: '+91 9810024119',
      href: 'tel:+919810024119'
  },
  {
    id: 'phone-2',
    icon: <Phone className="h-6 w-6 text-primary" />,
    title: 'Phone',
    value: '+91 8588812905',
    href: 'tel:+918588812905'
  },
  {
    id: 'email-1',  
    icon: <Mail className="h-6 w-6 text-primary" />,
      title: 'Email',
      value: 'srblawpartners@gmail.com',
      href: 'mailto:srblawpartners@gmail.com'
  },
  {
    id: 'email-2',
    icon: <Mail className="h-6 w-6 text-primary" />,
    title: 'Email',
    value: 'lawoffices@srblawpartners.com',
    href: 'mailto:lawoffices@srblawpartners.com'
  }
]

export default function ContactPage() {
  return (
    <div className="bg-background">
        <div className="relative h-64 md:h-96 w-full mb-12 md:mb-16">
          <Image
            src="/WEBSITE G.jpg"
            alt="Contact us banner"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Our Offices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactDetails.map((detail) => (
                  <div key={detail.title} className="flex items-start gap-4">
                    <div className="mt-1">{detail.icon}</div>
                    <div>
                      <h3 className="font-semibold">{detail.title}</h3>
                      <p className="text-muted-foreground">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
               <CardHeader>
                <CardTitle className="font-headline">Direct Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactMethods.map((method) => (
                   <div key={method.id} className="flex items-start gap-4">
                    <div className="mt-1">{method.icon}</div>
                    <div>
                      <h3 className="font-semibold">{method.title}</h3>
                      <a href={method.href} className="text-muted-foreground hover:text-primary transition-colors">{method.value}</a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div>
             <Card className="p-4 sm:p-6 md:p-8">
              <ContactForm />
             </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
