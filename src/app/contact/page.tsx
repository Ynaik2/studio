import { ContactForm } from '@/components/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';

const contactDetails = [
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: 'North Delhi Office',
    value: 'A-123, Model Town, Delhi, 110009',
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: 'Central Delhi Office',
    value: 'B-456, Connaught Place, Delhi, 110001',
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: 'South Delhi Office',
    value: 'C-789, Saket, Delhi, 110017',
  },
];

const contactMethods = [
    {
        icon: <Phone className="h-6 w-6 text-primary" />,
        title: 'Phone',
        value: '+91 11 2345 6789',
        href: 'tel:+911123456789'
    },
    {
        icon: <Mail className="h-6 w-6 text-primary" />,
        title: 'Email',
        value: 'contact@srblaw.com',
        href: 'mailto:contact@srblaw.com'
    }
]

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Get In Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We are here to assist you. Reach out to us through any of our offices or send us a message.
          </p>
        </div>

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
                   <div key={method.title} className="flex items-start gap-4">
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
