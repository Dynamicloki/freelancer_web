import { Card } from '@/components/ui/card';
import { Shield, Lock, UserCheck, AlertCircle, CheckCircle2, Scale } from 'lucide-react';

export default function TrustSafetyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Trust & Safety</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Learn about our comprehensive security measures and how we protect our community
        </p>

        {/* Security Features */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            {
              icon: Shield,
              title: 'Secure Payments',
              description: 'All transactions are protected by our secure escrow system and SSL encryption.'
            },
            {
              icon: Lock,
              title: 'Data Protection',
              description: 'Your personal and business data is encrypted and stored securely.'
            },
            {
              icon: UserCheck,
              title: 'Identity Verification',
              description: 'All freelancers undergo thorough verification of their identity and credentials.'
            },
            {
              icon: AlertCircle,
              title: 'Fraud Prevention',
              description: 'Advanced AI systems monitor and prevent fraudulent activities.'
            },
          ].map((feature, index) => (
            <Card key={index} className="p-6">
              <feature.icon className="h-8 w-8 text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Protection Measures */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">How We Protect You</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Secure Payment Protection',
                items: [
                  'Escrow system for all transactions',
                  'Multiple payment options',
                  'Dispute resolution system',
                  'Money-back guarantee'
                ]
              },
              {
                title: 'Account Security',
                items: [
                  'Two-factor authentication',
                  'Login alerts',
                  'Session management',
                  'Regular security audits'
                ]
              },
              {
                title: 'Work Quality Assurance',
                items: [
                  'Skill verification',
                  'Portfolio review',
                  'Client feedback system',
                  'Quality standards enforcement'
                ]
              }
            ].map((section, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Dispute Resolution */}
        <Card className="p-8 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Scale className="h-10 w-10 text-primary" />
            <h2 className="text-2xl font-bold">Dispute Resolution</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            In the rare event of a dispute, our dedicated support team is here to help. We provide:
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              'Fair and transparent resolution process',
              'Mediation by experienced support staff',
              'Protection for both parties',
              'Clear documentation requirements',
              'Quick response times',
              'Fair refund policies'
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Reporting */}
        <Card className="p-8 bg-muted/50">
          <h2 className="text-2xl font-bold mb-4">Report a Concern</h2>
          <p className="text-muted-foreground mb-4">
            If you notice any suspicious activity or have concerns about a user or transaction,
            please report it immediately. We take all reports seriously and investigate thoroughly.
          </p>
          <div className="flex gap-4">
            <Card className="p-4 flex-1 text-center">
              <h3 className="font-semibold mb-2">Emergency Support</h3>
              <p className="text-muted-foreground">24/7 support for urgent issues</p>
            </Card>
            <Card className="p-4 flex-1 text-center">
              <h3 className="font-semibold mb-2">Report Form</h3>
              <p className="text-muted-foreground">Submit detailed reports online</p>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
}