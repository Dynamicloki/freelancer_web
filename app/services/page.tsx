import { ServiceCard } from './service-card';
import { ServiceFilters } from './service-filters';
import { Suspense } from 'react';
import { demoServices } from '@/lib/demo-data/services';

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Find Services</h1>
      <ServiceFilters />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <Suspense fallback={<div>Loading...</div>}>
          {demoServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}