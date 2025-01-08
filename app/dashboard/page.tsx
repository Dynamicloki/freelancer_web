import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { DashboardHeader } from './dashboard-header';
import { DashboardContent } from './dashboard-content';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getProfileData(userId: string) {
  const supabase = createClient();
  const { data: profile } = await supabase
    .from('profiles')
    .select(`
      *,
      services (
        id,
        title,
        price
      ),
      projects (
        id,
        title,
        status
      )
    `)
    .eq('user_id', userId)
    .single();

  return profile;
}

export default async function DashboardPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/login');
  }

  const profile = await getProfileData(user.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <DashboardHeader user={user} profile={profile} />
      <Suspense fallback={<DashboardLoading />}>
        <DashboardContent profile={profile} />
      </Suspense>
    </div>
  );
}