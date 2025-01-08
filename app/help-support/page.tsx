import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, BookOpen, MessageCircle, FileQuestion, LifeBuoy } from 'lucide-react';

export default function HelpSupportPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Help & Support</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Find answers to your questions and get the support you need
        </p>

        {/* Search */}
        <div className="relative mb-12">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search help articles..."
            className="pl-10 h-12 text-lg"
          />
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <BookOpen className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-2">Getting Started</h2>
            <p className="text-muted-foreground mb-4">
              Learn the basics of using our platform and find your way around.
            </p>
            <Button variant="outline" className="w-full">View Guides</Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <MessageCircle className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-2">Contact Support</h2>
            <p className="text-muted-foreground mb-4">
              Get in touch with our support team for personalized assistance.
            </p>
            <Button variant="outline" className="w-full">Contact Us</Button>
          </Card>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'How do I create an account?',
                a: 'Click the "Sign Up" button in the top right corner and follow the registration process. You can choose to sign up as either a client or freelancer.'
              },
              {
                q: 'How does payment work?',
                a: 'We use a secure escrow system. Clients deposit funds when hiring, and payment is released to freelancers upon successful completion of milestones.'
              },
              {
                q: 'What if I\'m not satisfied with the work?',
                a: 'We offer a satisfaction guarantee. If you\'re not happy with the delivered work, you can request revisions or open a dispute for resolution.'
              },
              {
                q: 'How do you verify freelancers?',
                a: 'Freelancers go through a verification process that includes ID verification, skills assessment, and portfolio review.'
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Still Need Help */}
        <Card className="p-8 text-center">
          <LifeBuoy className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Still Need Help?</h2>
          <p className="text-muted-foreground mb-6">
            Our support team is available 24/7 to assist you with any questions or concerns.
          </p>
          <div className="flex gap-4 justify-center">
            <Button>Live Chat</Button>
            <Button variant="outline">Send Email</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}