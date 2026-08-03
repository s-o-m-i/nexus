interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9f193f]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-slate-900">{title}</h2>
      <p className="mt-3 text-lg leading-8 text-slate-600">{description}</p>
    </div>
  );
}
