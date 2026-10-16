"use client";

import Link from "next/link";
import { navLinks } from "@/lib/home-content";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[var(--surface-dark)] text-white">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <Link href="/" className="font-display text-lg tracking-[-0.03em] text-white">
          DevMola
        </Link>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm text-white/55 transition-colors hover:text-white">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-5 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>© {year} DevMola. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy-policy/" className="hover:text-white/70">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service/" className="hover:text-white/70">
              Terms of Service
            </Link>
            <Link href="/sitemap/" className="hover:text-white/70">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
