import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <Card className="bg-primary text-primary-foreground p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Join thousands of businesses and freelancers already using our platform to achieve their goals
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/auth/signup">Sign Up Now</Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent" asChild>
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </Card>
    </section>
  );
}