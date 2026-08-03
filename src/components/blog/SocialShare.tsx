"use client";

import { useState } from "react";

interface SocialShareProps {
  title: string;
  url: string;
}

export default function SocialShare({ title, url }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const shareLinks = [
    { label: "X", href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}` },
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
  ];

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {shareLinks.map((link) => (
        <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#9f193f] hover:text-[#9f193f]">
          {link.label}
        </a>
      ))}
      <button onClick={handleCopy} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#9f193f] hover:text-[#9f193f]">
        {copied ? "Copied" : "Copy link"}
      </button>
    </div>
  );
}
