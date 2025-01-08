import { Card } from '@/components/ui/card';
import { SparklesIcon, SearchIcon, BriefcaseIcon, ShieldCheckIcon } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: SparklesIcon,
      title: 'AI-Powered Matching',
      description: 'Our AI algorithm matches you with the perfect freelancers based on your project requirements.',
    },
    {
      icon: SearchIcon,
      title: 'Smart Search',
      description: 'Find exactly what you need with our advanced search and filtering system.',
    },
    {
      icon: BriefcaseIcon,
      title: 'Secure Projects',
      description: 'Manage projects with confidence using our secure payment and milestone system.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Quality Guaranteed',
      description: 'Every freelancer is verified and their work quality is continuously monitored.',
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose FreelanceAI</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <Card key={feature.title} className="p-6 flex flex-col items-center text-center">
            <feature.icon className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}