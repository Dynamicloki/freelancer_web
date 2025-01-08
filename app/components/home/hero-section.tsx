'use client';

import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
        Find Expert Freelancers with AI-Powered Matching
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        Connect with top talent using our advanced AI matching system. Get your projects done faster and smarter.
      </p>
      <div className="flex gap-4 justify-center">
        <Button asChild size="lg">
          <Link href="/auth/signup">Get Started</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/services">Browse Services</Link>
        </Button>
      </div>
    </section>
  );
}