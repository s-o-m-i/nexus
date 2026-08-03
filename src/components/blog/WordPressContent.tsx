"use client";

import { memo, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import parse, { domToReact, HTMLReactParserOptions } from "html-react-parser";
import type { Element } from "domhandler";
import { Check, Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { uniqueSlug } from "@/lib/slug";

function getTextContent(node: Element | undefined): string {
  if (!node) return "";

  return node.children
    .map((child) => {
      if (child.type === "text") {
        return child.data;
      }

      if (child.type === "tag") {
        return getTextContent(child as Element);
      }

      return "";
    })
    .join("")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeImageUrl(src: string | undefined) {
  if (!src) return "";

  if (src.startsWith("//")) {
    return `https:${src}`;
  }

  if (/^(https?:)?\/\//i.test(src) || src.startsWith("data:")) {
    return src;
  }

  try {
    return new URL(src, "https://cms.devmola.com").toString();
  } catch {
    return src;
  }
}

function CodeBlock({ node }: { node: Element }) {
  const [copied, setCopied] = useState(false);
  const codeNode = node.children.find((child) => child.type === "tag" && (child as Element).name === "code") as Element | undefined;
  const codeText = getTextContent(codeNode ?? node);
  const languageMatch = (codeNode?.attribs?.class ?? "").match(/language-([\w-]+)/);
  const language = languageMatch?.[1] ?? "text";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeText);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="my-8 overflow-hidden rounded-[24px] border border-slate-800 bg-slate-950 shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/90 px-4 py-3">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">{language}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:bg-white/20"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={oneDark as never}
        customStyle={{ margin: 0, padding: "1.25rem 1.25rem 1.5rem", background: "transparent" }}
        wrapLongLines
      >
        {codeText}
      </SyntaxHighlighter>
    </div>
  );
}

interface WordPressContentProps {
  content: string;
}

const WordPressContent = memo(function WordPressContent({ content }: WordPressContentProps) {
  const used = useMemo(() => new Map<string, number>(), []);
  const parserOptions = useMemo<HTMLReactParserOptions>(() => ({
    replace(domNode) {
      if (domNode.type !== "tag") {
        return;
      }

      const node = domNode as Element;
      const tagName = node.name.toLowerCase();
      const attrs = node.attribs ?? {};
      const children = domToReact(node.children as any, parserOptions as any);
      const className = attrs.class ?? "";

      switch (tagName) {
        case "p": {
          return <p className="article-paragraph">{children}</p>;
        }
        case "h1": {
          const id = uniqueSlug(getTextContent(node), used);
          return (
            <h2 id={id} data-toc-heading="true" className="article-heading article-heading-h2">
              {children}
            </h2>
          );
        }
        case "h2": {
          const id = uniqueSlug(getTextContent(node), used);
          return (
            <h2 id={id} data-toc-heading="true" className="article-heading article-heading-h2">
              {children}
            </h2>
          );
        }
        case "h3": {
          const id = uniqueSlug(getTextContent(node), used);
          return (
            <h3 id={id} data-toc-heading="true" className="article-heading article-heading-h3">
              {children}
            </h3>
          );
        }
        case "h4": {
          const id = uniqueSlug(getTextContent(node), used);
          return (
            <h4 id={id} data-toc-heading="true" className="article-heading article-heading-h4">
              {children}
            </h4>
          );
        }
        case "h5": {
          const id = uniqueSlug(getTextContent(node), used);
          return (
            <h5 id={id} data-toc-heading="true" className="article-heading article-heading-h5">
              {children}
            </h5>
          );
        }
        case "h6": {
          const id = uniqueSlug(getTextContent(node), used);
          return (
            <h6 id={id} data-toc-heading="true" className="article-heading article-heading-h6">
              {children}
            </h6>
          );
        }
        case "a": {
          const href = attrs.href ?? "";
          const isExternal = /^https?:\/\//i.test(href) || href.startsWith("mailto:");
          const isAnchor = href.startsWith("#");

          if (!href) {
            return <span>{children}</span>;
          }

          if (isExternal || isAnchor) {
            return (
              <a
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="article-link"
              >
                {children}
              </a>
            );
          }

          return (
            <Link href={href} className="article-link">
              {children}
            </Link>
          );
        }
        case "strong": {
          return <strong className="font-semibold text-slate-900">{children}</strong>;
        }
        case "em": {
          return <em className="italic text-slate-800">{children}</em>;
        }
        case "code": {
          if (node.parent?.type === "tag" && (node.parent as Element).name.toLowerCase() === "pre") {
            return <>{children}</>;
          }

          return <code className="article-inline-code">{children}</code>;
        }
        case "pre": {
          return <CodeBlock node={node} />;
        }
        case "blockquote": {
          return <blockquote className="article-blockquote">{children}</blockquote>;
        }
        case "ul": {
          return <ul className="article-list article-list-bullets">{children}</ul>;
        }
        case "ol": {
          return <ol className="article-list article-list-numbers">{children}</ol>;
        }
        case "li": {
          return <li className="article-list-item">{children}</li>;
        }
        case "img": {
          const src = normalizeImageUrl(attrs.src);
          const width = Number(attrs.width) || 1200;
          const height = Number(attrs.height) || 780;
          const alt = attrs.alt ?? "";

          if (!src) {
            return null;
          }

          return (
            <div className="my-8 overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50 p-2 shadow-sm">
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                sizes="(max-width: 768px) 100vw, 768px"
                className="w-full rounded-[18px] object-cover"
                loading="lazy"
              />
            </div>
          );
        }
        case "figure": {
          const hasImage = node.children.some((child) => child.type === "tag" && (child as Element).name.toLowerCase() === "img");
          return (
            <figure className={`article-figure ${className.includes("wp-caption") ? "article-caption" : ""}`}>
              {children}
              {hasImage ? null : null}
            </figure>
          );
        }
        case "figcaption": {
          return <figcaption className="article-caption-text">{children}</figcaption>;
        }
        case "table": {
          return (
            <div className="my-8 overflow-x-auto rounded-[24px] border border-slate-200 bg-white shadow-sm">
              <table className="min-w-full border-collapse text-left text-sm text-slate-700">
                {children}
              </table>
            </div>
          );
        }
        case "thead": {
          return <thead className="sticky top-0 z-10 bg-slate-50 text-slate-900">{children}</thead>;
        }
        case "tbody": {
          return <tbody>{children}</tbody>;
        }
        case "tr": {
          return <tr className="border-b border-slate-200 odd:bg-white even:bg-slate-50">{children}</tr>;
        }
        case "th": {
          return <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">{children}</th>;
        }
        case "td": {
          return <td className="px-4 py-3 align-top">{children}</td>;
        }
        case "hr": {
          return <hr className="my-10 border-0 border-t border-slate-200" />;
        }
        case "iframe":
        case "video": {
          const src = String(attrs.src ?? attrs["data-src"] ?? "");
          return (
            <div className="my-8 overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50 p-2 shadow-sm">
              {tagName === "iframe" ? (
                <iframe src={src} title="Embedded content" className="min-h-[320px] w-full rounded-[18px] border-0" loading="lazy" />
              ) : (
                <video controls className="w-full rounded-[18px]" src={src} />
              )}
            </div>
          );
        }
        case "div": {
          if (className.includes("wp-block-columns")) {
            return <div className="my-8 grid gap-6 md:grid-cols-2">{children}</div>;
          }

          if (className.includes("wp-block-column")) {
            return <div className="min-w-0">{children}</div>;
          }

          if (className.includes("wp-block-buttons")) {
            return <div className="my-8 flex flex-wrap gap-3">{children}</div>;
          }

          if (className.includes("wp-block-button")) {
            return <div>{children}</div>;
          }

          return <div className="article-wrapper">{children}</div>;
        }
        case "button": {
          return <div className="inline-flex">{children}</div>;
        }
        case "audio": {
          return <audio controls className="my-8 w-full" src={attrs.src} />;
        }
        case "source": {
          return null;
        }
        default: {
          return;
        }
      }
    },
  }), []);

  return <div className="article-content">{parse(content, parserOptions)}</div>;
});

export default WordPressContent;
