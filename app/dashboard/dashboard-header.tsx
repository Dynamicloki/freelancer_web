'use client';

import { Button } from '@/components/ui/button';
import { signOut } from '@/lib/auth/auth-utils';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

export function DashboardHeader({ user, profile }: any) {
  const router = useRouter();
  const { toast } = useToast();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
      return;
    }
    router.push('/');
  };

  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, {profile?.full_name || user.email}
        </p>
      </div>
      <Button onClick={handleSignOut} variant="outline">
        Sign Out
      </Button>
    </div>
  );
}