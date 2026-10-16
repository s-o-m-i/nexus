"use client";

import Link from "next/link";
import { contact, navLinks, serviceLinks } from "@/lib/home-content";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[var(--ink)] text-white">
      <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-[var(--brand)]/20 blur-3xl" />
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mb-16 max-w-3xl">
          <p className="font-display text-[clamp(2.4rem,7vw,5.5rem)] leading-[0.92] tracking-[-0.05em]">
            Let’s make the next thing count.
          </p>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/65">
            DevMola is a digital agency in Islamabad — design, development, SEO, and marketing for businesses that want work with taste and outcomes.
          </p>
        </div>

        <div className="grid gap-12 border-t border-white/10 pt-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl tracking-[-0.04em]">
              Dev<span className="text-[var(--brand-soft)]">Mola</span>
            </p>
            <p className="mt-4 text-sm leading-6 text-white/60">
              Founded in 2019. Based in {contact.location}, working with clients locally and internationally.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">Navigate</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/75 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">Services</p>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.path}>
                  <Link href={service.path} className="text-sm text-white/75 transition-colors hover:text-white">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.whatsappHref} className="hover:text-white">
                  WhatsApp {contact.whatsapp}
                </a>
              </li>
              <li>{contact.location}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-5 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>© {year} DevMola. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy-policy/" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service/" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/sitemap/" className="hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
