import ServiceDetailPage from "@/components/services/premium/detail/ServiceDetailPage";
import { buildServiceDetailMetadata } from "@/lib/services-detail-content";
import type { Metadata } from "next";

export const metadata: Metadata = buildServiceDetailMetadata("digital-marketing");

export default function Page() {
  return <ServiceDetailPage slug="digital-marketing" />;
}
