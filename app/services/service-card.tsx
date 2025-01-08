'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDistanceToNow } from 'date-fns';

interface ServiceCardProps {
  service: any;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={service.profiles.avatar_url} />
          <AvatarFallback>
            {service.profiles.full_name?.charAt(0) || 'U'}
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg">{service.title}</CardTitle>
          <p className="text-sm text-muted-foreground">
            by {service.profiles.full_name}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{service.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-semibold">
            Starting at ${service.price}
          </span>
          <span className="text-sm text-muted-foreground">
            {formatDistanceToNow(new Date(service.created_at), { addSuffix: true })}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}