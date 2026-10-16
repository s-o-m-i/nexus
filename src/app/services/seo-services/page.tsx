import ServiceDetailPage from "@/components/services/premium/detail/ServiceDetailPage";
import { buildServiceDetailMetadata } from "@/lib/services-detail-content";
import type { Metadata } from "next";

export const metadata: Metadata = buildServiceDetailMetadata("seo-services");

export default function Page() {
  return <ServiceDetailPage slug="seo-services" />;
}
