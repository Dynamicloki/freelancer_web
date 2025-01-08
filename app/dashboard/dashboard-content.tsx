'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export function DashboardContent({ profile }: any) {
  const [stats, setStats] = useState({
    activeCount: 0,
    earnings: 0,
    viewCount: 0
  });
  
  const isFreelancer = profile?.user_type === 'freelancer';
  const supabase = createClient();

  useEffect(() => {
    async function loadStats() {
      if (isFreelancer) {
        const { data: services } = await supabase
          .from('services')
          .select('id')
          .eq('freelancer_id', profile.id);
          
        setStats({
          activeCount: services?.length || 0,
          earnings: profile.total_earnings || 0,
          viewCount: profile.profile_views || 0
        });
      } else {
        const { data: projects } = await supabase
          .from('projects')
          .select('id, status')
          .eq('client_id', profile.id);
          
        setStats({
          activeCount: projects?.filter(p => p.status === 'active').length || 0,
          earnings: profile.total_spent || 0,
          viewCount: projects?.length || 0
        });
      }
    }

    loadStats();
  }, [profile.id, isFreelancer]);

  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        {isFreelancer ? (
          <TabsTrigger value="services">My Services</TabsTrigger>
        ) : (
          <TabsTrigger value="projects">My Projects</TabsTrigger>
        )}
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>

      <TabsContent value="overview">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                {isFreelancer ? 'Active Services' : 'Active Projects'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stats.activeCount}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                {isFreelancer ? 'Total Earnings' : 'Total Spent'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">${stats.earnings}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                {isFreelancer ? 'Profile Views' : 'Total Projects'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stats.viewCount}</p>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="services">
        {isFreelancer && profile.services?.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {profile.services.map((service: any) => (
              <Card key={service.id}>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-bold">${service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="py-8 text-center">
              <p className="text-muted-foreground">No services yet.</p>
            </CardContent>
          </Card>
        )}
      </TabsContent>

      <TabsContent value="projects">
        {!isFreelancer && profile.projects?.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {profile.projects.map((project: any) => (
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="capitalize text-muted-foreground">
                    Status: {project.status}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="py-8 text-center">
              <p className="text-muted-foreground">No projects yet.</p>
            </CardContent>
          </Card>
        )}
      </TabsContent>

      <TabsContent value="settings">
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Coming soon.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}