import { BrainCircuitIcon } from "lucide-react";
import Link from "next/link";
import { footerLinks } from "./footer-links";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <BrainCircuitIcon className="h-6 w-6" />
              <span className="font-semibold">FreelanceAI</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Connect with top talent using our advanced AI matching system. 
              Get your projects done faster and smarter.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-3">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} FreelanceAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}