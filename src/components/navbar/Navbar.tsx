"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CalendlyWidget from "../CalendlyWidget";
import { navLinks, serviceLinks } from "@/lib/home-content";
import { AgencyButton, ArrowIcon } from "@/components/home/premium/PremiumUI";
import { duration, easeOut, stagger } from "@/lib/motion";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<HTMLAnchorElement[]>([]);
  const menuReady = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useGSAP(
    () => {
      if (!headerRef.current) return;
      gsap.fromTo(
        headerRef.current,
        { y: -24, opacity: 0 },
        { y: 0, opacity: 1, duration: duration.entrance, ease: easeOut, delay: 0.08 }
      );
    },
    { scope: headerRef }
  );

  useGSAP(
    () => {
      if (!overlayRef.current || !panelRef.current) return;
      if (!menuReady.current) {
        menuReady.current = true;
        return;
      }
      if (mobileOpen) {
        const tl = gsap.timeline();
        tl.set(overlayRef.current, { display: "block" })
          .fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 })
          .fromTo(
            panelRef.current,
            { xPercent: 100 },
            { xPercent: 0, duration: duration.menu, ease: easeOut },
            "<"
          )
          .fromTo(
            linkRefs.current,
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.55, stagger: stagger.tight, ease: easeOut },
            "-=0.35"
          );
      } else {
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.25,
          onComplete: () => {
            if (overlayRef.current) overlayRef.current.style.display = "none";
          },
        });
      }
    },
    { dependencies: [mobileOpen] }
  );

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.replace(/\/$/, ""));
  };

  const navLinkClass = (href: string) =>
    `inline-flex h-10 items-center whitespace-nowrap font-display text-[13px] font-medium leading-none tracking-[-0.01em] transition-colors ${
      isActive(href) ? "text-[var(--brand)]" : "text-[var(--ink)] hover:text-[var(--brand)]"
    }`;

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-[var(--border)] bg-[rgba(246,241,235,0.92)] backdrop-blur-xl"
            : "border-b border-transparent bg-[rgba(246,241,235,0.72)] backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="font-display text-[22px] font-semibold tracking-[-0.04em] text-[var(--ink)]"
          >
            Dev<span className="text-[var(--brand)]">Mola</span>
          </Link>

          <nav className="hidden lg:flex" aria-label="Main">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) =>
                link.label === "Services" ? (
                  <li
                    key={link.href}
                    className="relative flex items-center"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link href={link.href} className={navLinkClass(link.href)}>
                      {link.label}
                    </Link>
                    <div
                      className={`absolute left-1/2 top-full z-40 w-[560px] -translate-x-1/2 pt-5 transition-all duration-300 ${
                        servicesOpen ? "visible opacity-100" : "invisible opacity-0"
                      }`}
                    >
                      <div className="grid grid-cols-2 gap-2 rounded-2xl border border-[var(--border)] bg-white p-4 shadow-[0_20px_60px_rgba(17,17,17,0.12)]">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.path}
                            href={service.path}
                            className="rounded-xl px-4 py-3 transition-colors hover:bg-[var(--bg)]"
                          >
                            <p className="text-sm font-semibold text-[var(--ink)]">{service.name}</p>
                            <p className="mt-1 text-xs leading-5 text-[var(--text-muted)]">{service.description}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={link.href} className="flex items-center">
                    <Link href={link.href} className={navLinkClass(link.href)}>
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <AgencyButton href={pathname === "/" ? "#contact" : "/contact/"} className="!px-5 !py-2.5 text-[13px]">
              Start a Project
            </AgencyButton>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--ink)] lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform duration-300 ${
                  mobileOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-[1.5px] w-full bg-current transition-opacity duration-300 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[12px] h-[1.5px] w-full bg-current transition-transform duration-300 ${
                  mobileOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        ref={overlayRef}
        className="fixed inset-0 z-[60] hidden lg:hidden"
        style={{ display: "none" }}
      >
        <button
          type="button"
          className="absolute inset-0 bg-[var(--ink)]/40"
          aria-label="Close menu overlay"
          onClick={() => setMobileOpen(false)}
        />
        <div
          id="mobile-nav"
          ref={panelRef}
          className="absolute inset-y-0 right-0 flex w-[86%] max-w-md flex-col bg-[var(--bg)] px-6 py-8"
        >
          <div className="mb-10 flex items-center justify-between">
            <p className="font-display text-xl font-semibold">DevMola</p>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-[var(--text-muted)]"
            >
              Close
            </button>
          </div>
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {navLinks.map((link, index) =>
              link.label === "Services" ? (
                <div key={link.href}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 text-left font-display text-3xl tracking-[-0.04em]"
                    onClick={() => setMobileServicesOpen((open) => !open)}
                    ref={(el) => {
                      if (el) linkRefs.current[index] = el as unknown as HTMLAnchorElement;
                    }}
                  >
                    Services
                    <ArrowIcon className={`h-5 w-5 transition-transform ${mobileServicesOpen ? "rotate-90" : ""}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="mb-4 space-y-2 pl-1">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.path}
                          href={service.path}
                          className="block py-2 text-sm text-[var(--text-muted)]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  ref={(el) => {
                    if (el) linkRefs.current[index] = el;
                  }}
                  className="py-3 font-display text-3xl tracking-[-0.04em]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
          <div className="mt-auto space-y-3">
            <AgencyButton
              href={pathname === "/" ? "#contact" : "/contact/"}
              className="w-full"
              onClick={() => setMobileOpen(false)}
            >
              Start a Project
            </AgencyButton>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                setIsOpen(true);
              }}
              className="w-full rounded-full border border-[var(--border)] py-3 text-sm font-semibold"
            >
              Book a Call
            </button>
          </div>
        </div>
      </div>

      <CalendlyWidget isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
