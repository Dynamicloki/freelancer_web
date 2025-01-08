import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CodeIcon, PencilRulerIcon, LineChartIcon, MessagesSquareIcon, BrainCircuitIcon, CameraIcon } from 'lucide-react';
import Link from 'next/link';

export function CategoriesSection() {
  const categories = [
    { icon: CodeIcon, name: 'Development', count: 1200 },
    { icon: PencilRulerIcon, name: 'Design', count: 800 },
    { icon: LineChartIcon, name: 'Marketing', count: 600 },
    { icon: MessagesSquareIcon, name: 'Writing', count: 500 },
    { icon: BrainCircuitIcon, name: 'AI Services', count: 400 },
    { icon: CameraIcon, name: 'Video & Audio', count: 300 },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Popular Categories</h2>
        <p className="text-muted-foreground">Browse our most in-demand service categories</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card key={category.name} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <category.icon className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count}+ services</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button asChild>
          <Link href="/services">View All Categories</Link>
        </Button>
      </div>
    </section>
  );
}