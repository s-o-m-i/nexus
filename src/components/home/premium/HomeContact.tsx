"use client";

import { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { contact, formServices } from "@/lib/home-content";
import { ArrowIcon, Eyebrow, SectionShell } from "./PremiumUI";
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
  const root = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;
      gsap.fromTo(
        "[data-contact-panel]",
        { opacity: 0, y: 40, rotateX: 12 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 82%", once: true },
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
    "mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 text-[15px] text-[var(--ink)] placeholder:text-[var(--text-muted)]/70 outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20";

  return (
    <SectionShell id="contact" className="bg-[var(--bg)]">
      <div ref={root} className="perspective-3d grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div data-contact-panel>
          <Eyebrow>Project inquiry</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2.3rem,5vw,4.6rem)] leading-[0.94] tracking-[-0.05em]">
            Let’s build something meaningful.
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-[var(--text-muted)]">
            Send the brief. We review it, reply with next steps, and book a conversation if we’re a fit. Prefer WhatsApp or email? Use those directly.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <a href={`mailto:${contact.email}`} className="block font-semibold text-[var(--ink)] hover:text-[var(--brand)]">
              {contact.email}
            </a>
            <a href={contact.whatsappHref} className="block text-[var(--text-muted)] hover:text-[var(--brand)]">
              WhatsApp {contact.whatsapp}
            </a>
            <p className="text-[var(--text-muted)]">{contact.location}</p>
          </div>
        </div>

        <div data-contact-panel className="relative preserve-3d">
          <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-[28px] bg-[var(--brand)]/20" />
          <div className="relative rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-[0_24px_50px_rgba(17,17,17,0.08)] sm:p-8">
          {state.errors && Object.keys(state.errors).length > 0 && (
            <p className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
              Something went wrong. Please check the form and try again.
            </p>
          )}

          <form onSubmit={onSubmit} noValidate className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-[var(--ink)]">
                  Name <span className="text-[var(--brand)]">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={onChange}
                  autoComplete="name"
                  placeholder="Your name"
                  className={fieldClass}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-[var(--ink)]">
                  Email <span className="text-[var(--brand)]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={onChange}
                  autoComplete="email"
                  placeholder="you@company.com"
                  className={fieldClass}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="company" className="text-sm font-medium text-[var(--ink)]">
                Company or project
              </label>
              <input
                id="company"
                name="company"
                value={values.company}
                onChange={onChange}
                placeholder="Optional"
                className={fieldClass}
              />
              <ValidationError prefix="Company" field="company" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="service" className="text-sm font-medium text-[var(--ink)]">
                What do you need?
              </label>
              <select id="service" name="service" value={values.service} onChange={onChange} className={fieldClass}>
                <option value="">Select an option</option>
                {formServices.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ValidationError prefix="Service" field="service" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-[var(--ink)]">
                Tell us about your project <span className="text-[var(--brand)]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={values.message}
                onChange={onChange}
                placeholder="Goals, timeline, or whatever helps us understand how we can help."
                className={`${fieldClass} resize-none`}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
              {errors.message && (
                <p id="message-error" className="mt-1 text-xs text-red-600">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[var(--brand-deep)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {state.submitting ? "Sending..." : "Send message"}
              {!state.submitting && (
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              )}
            </button>
          </form>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-[var(--ink)]/70 p-4" role="dialog" aria-modal="true">
          <div className="max-w-md rounded-3xl bg-white p-8 text-center">
            <h3 className="font-display text-2xl tracking-[-0.04em]">Message sent</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
              Thanks for writing. We’ll review the inquiry and get back to you shortly.
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
    </SectionShell>
  );
}
