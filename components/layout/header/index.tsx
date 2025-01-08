import { BrainCircuitIcon } from "lucide-react";
import Link from "next/link";
import { AuthButtons } from "./auth-buttons";
import { MobileNav } from "./mobile-nav";
import { NavLinks } from "./nav-links";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <BrainCircuitIcon className="h-6 w-6" />
            <span className="font-semibold">FreelanceAI</span>
          </Link>
          <NavLinks />
        </div>
        <div className="flex items-center gap-4">
          <AuthButtons />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}