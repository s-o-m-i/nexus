import Script from "next/script";

interface SchemaProps {
  data: Record<string, unknown>;
}

export default function Schema({ data }: SchemaProps) {
  return (
    <Script
      id={`schema-${Math.random().toString(36).slice(2)}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
