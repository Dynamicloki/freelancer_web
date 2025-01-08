import { ProjectCard } from './project-card';
import { ProjectFilters } from './project-filters';
import { Suspense } from 'react';
import { demoProjects } from '@/lib/demo-data';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Browse Projects</h1>
      <ProjectFilters />
      <div className="grid gap-6 mt-8">
        <Suspense fallback={<div>Loading...</div>}>
          {demoProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}