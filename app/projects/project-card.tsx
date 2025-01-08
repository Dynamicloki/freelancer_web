'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDistanceToNow } from 'date-fns';

interface ProjectCardProps {
  project: any;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
            <p className="text-sm text-muted-foreground">
              Posted by {project.profiles.full_name}
            </p>
          </div>
          <Badge variant="secondary">
            Budget: ${project.budget}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex justify-between items-center">
          <Badge variant="outline" className="capitalize">
            {project.status.replace('_', ' ')}
          </Badge>
          <span className="text-sm text-muted-foreground">
            {formatDistanceToNow(new Date(project.created_at), { addSuffix: true })}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}