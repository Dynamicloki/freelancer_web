import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRightIcon, BrainCircuitIcon, CheckCircle2Icon, ShieldCheckIcon, StarIcon, UsersIcon } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">How FreelanceAI Works</h1>
        <p className="text-xl text-muted-foreground">
          Our AI-powered platform makes it easy to connect with the perfect freelancer for your project
        </p>
      </div>

      <div className="grid gap-12">
        {/* Step 1: Post Your Project */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">1. Post Your Project</h2>
            <p className="text-muted-foreground mb-4">
              Describe your project requirements, budget, and timeline. Our AI system will help you
              create a clear and comprehensive project brief that attracts the right talent.
            </p>
            <Button asChild>
              <Link href="/post-project">
                Post a Project <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <BrainCircuitIcon className="h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold">AI-Powered Matching</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Smart requirement analysis',
                'Automatic skill matching',
                'Budget recommendations',
                'Timeline optimization',
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <CheckCircle2Icon className="h-5 w-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Step 2: Connect with Freelancers */}
        <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
          <div className="md:order-2">
            <h2 className="text-2xl font-semibold mb-4">2. Connect with Freelancers</h2>
            <p className="text-muted-foreground mb-4">
              Review proposals from qualified freelancers, chat with them directly, and choose the
              perfect match for your project. Our AI helps evaluate proposals and verify freelancer
              credentials.
            </p>
            <Button asChild>
              <Link href="/find-freelancers">
                Find Freelancers <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Card className="p-6 md:order-1">
            <div className="flex items-center gap-4 mb-4">
              <ShieldCheckIcon className="h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold">Secure Collaboration</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Verified profiles',
                'Secure messaging',
                'Portfolio verification',
                'Skills assessment',
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <CheckCircle2Icon className="h-5 w-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Step 3: Manage Projects */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">3. Manage Projects</h2>
            <p className="text-muted-foreground mb-4">
              Use our comprehensive project management tools to track progress, manage milestones,
              and ensure successful project completion. Our platform handles payments and provides
              dispute resolution if needed.
            </p>
            <Button asChild>
              <Link href="/auth/signup">
                Get Started <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <StarIcon className="h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold">Quality Assurance</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Milestone tracking',
                'Secure payments',
                'Quality reviews',
                'Satisfaction guarantee',
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <CheckCircle2Icon className="h-5 w-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Success Stories */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Startup Founder',
                quote: 'Found the perfect development team for our MVP in just 2 days.',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
              },
              {
                name: 'Michael Chen',
                role: 'Freelance Designer',
                quote: 'Doubled my client base within the first month of joining.',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
              },
              {
                name: 'Emma Davis',
                role: 'Marketing Director',
                quote: 'The AI matching saved us countless hours in the hiring process.',
                image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
              },
            ].map((testimonial) => (
              <Card key={testimonial.name} className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">&ldquo;{testimonial.quote}&rdquo;</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Get Started */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of businesses and freelancers already using our platform
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/auth/signup">Sign Up Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Browse Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}