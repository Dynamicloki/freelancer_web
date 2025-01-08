'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AuthButtons() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" asChild>
        <Link href="/auth/login">Log in</Link>
      </Button>
      <Button asChild>
        <Link href="/auth/signup">Sign up</Link>
      </Button>
    </div>
  );
}