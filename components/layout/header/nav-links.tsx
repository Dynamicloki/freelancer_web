'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: '/services', label: 'Find Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'How It Works' },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex gap-6">
      {links.map((link) => (
        <Button
          key={link.href}
          variant={pathname === link.href ? "secondary" : "ghost"}
          asChild
        >
          <Link href={link.href}>{link.label}</Link>
        </Button>
      ))}
    </nav>
  );
}