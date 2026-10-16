"use client";

import { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { contactQuickLinks, formServices } from "@/lib/home-content";
import { DiagonalArrowIcon } from "./PremiumUI";
import CalendlyWidget from "@/components/CalendlyWidget";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type FormValues = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

const emptyForm: FormValues = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

export default function HomeContact() {
  const [state, handleSubmit] = useForm("xblypodo");
  const [values, setValues] = useState<FormValues>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const root = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;
      gsap.fromTo(
        "[data-contact-tile]",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 85%", once: true },
        }
      );
      gsap.fromTo(
        "[data-contact-form]",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 80%", once: true },
        }
      );
    },
    { scope: root, dependencies: [reduced] }
  );

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      setValues(emptyForm);
      setErrors({});
    }
  }, [state.succeeded]);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const next: Partial<Record<keyof FormValues, string>> = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.email.trim()) next.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(values.email)) next.email = "Enter a valid email.";
    if (!values.message.trim()) next.message = "Please tell us about the project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate() || state.submitting) return;

    const payload = new FormData();
    Object.entries(values).forEach(([key, value]) => payload.append(key, value));
    await handleSubmit(payload);
  };

  const fieldClass =
    "w-full rounded-xl border border-white/[0.08] bg-[var(--surface-dark-field)] px-4 py-3.5 text-[15px] text-white placeholder:text-white/35 outline-none transition focus:border-white/20 focus:ring-2 focus:ring-white/10";

  const renderQuickLink = (item: (typeof contactQuickLinks)[number]) => {
    const inner = (
      <>
        <span className="font-display text-lg tracking-[-0.02em] text-white">{item.label}</span>
        <DiagonalArrowIcon className="h-4 w-4 text-white/45 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
      </>
    );

    const tileClass =
      "group flex min-h-[130px] flex-col justify-between rounded-[20px] bg-[var(--surface-dark-elevated)] p-5 transition duration-300 hover:bg-[#1f1f1f] sm:min-h-[150px] lg:min-h-[165px]";

    if (item.action === "calendly") {
      return (
        <button key={item.label} type="button" data-contact-tile onClick={() => setCalendlyOpen(true)} className={`${tileClass} text-left`}>
          {inner}
        </button>
      );
    }

    if (item.external) {
      return (
        <a key={item.label} href={item.href} target="_blank" rel="noreferrer" data-contact-tile className={tileClass}>
          {inner}
        </a>
      );
    }

    return (
      <Link key={item.label} href={item.href} data-contact-tile className={tileClass}>
        {inner}
      </Link>
    );
  };

  return (
    <section id="contact" className="relative bg-[var(--surface-dark)] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
      <div ref={root} className="mx-auto max-w-[1280px]">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.32fr)] lg:gap-5">
          <div className="grid grid-cols-2 gap-4">{contactQuickLinks.map(renderQuickLink)}</div>

          <div data-contact-form className="rounded-[24px] bg-[var(--surface-dark-elevated)] p-6 sm:p-8 lg:p-10">
            <h2 className="font-display text-[clamp(1.5rem,2.8vw,2.1rem)] leading-[1.15] tracking-[-0.04em] text-white">
              Interested but don&apos;t know where to start?
            </h2>

            {state.errors && Object.keys(state.errors).length > 0 && (
              <p className="mt-5 rounded-xl border border-red-400/30 bg-red-950/40 px-4 py-3 text-sm text-red-200" role="alert">
                Something went wrong. Please check the form and try again.
              </p>
            )}

            <form onSubmit={onSubmit} noValidate className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                    autoComplete="name"
                    placeholder="Name *"
                    className={fieldClass}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-red-300">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    autoComplete="email"
                    placeholder="Email *"
                    className={fieldClass}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-300">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className="sr-only">
                    Company or project
                  </label>
                  <input
                    id="company"
                    name="company"
                    value={values.company}
                    onChange={onChange}
                    placeholder="Company or project"
                    className={fieldClass}
                  />
                  <ValidationError prefix="Company" field="company" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="service" className="sr-only">
                    What do you need?
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={values.service}
                    onChange={onChange}
                    className={`${fieldClass} appearance-none`}
                  >
                    <option value="" className="bg-[#1a1a1a]">
                      What do you need?
                    </option>
                    {formServices.map((option) => (
                      <option key={option.value} value={option.value} className="bg-[#1a1a1a]">
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ValidationError prefix="Service" field="service" errors={state.errors} />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={onChange}
                  placeholder="Your message *"
                  className={`${fieldClass} min-h-[140px] resize-none`}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs text-red-300">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full rounded-xl bg-[var(--brand)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[var(--brand-deep)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <CalendlyWidget isOpen={calendlyOpen} setIsOpen={setCalendlyOpen} />

      {showSuccess && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4" role="dialog" aria-modal="true">
          <div className="max-w-md rounded-3xl bg-white p-8 text-center">
            <h3 className="font-display text-2xl tracking-[-0.04em] text-[var(--ink)]">Message sent</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
              Thanks for writing. We&apos;ll review the inquiry and get back to you shortly.
            </p>
            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="mt-6 rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-semibold text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
