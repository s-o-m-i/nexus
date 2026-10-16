"use client";

import HomeContact from "@/components/home/premium/HomeContact";
import { getServiceDetail, type ServiceDetailSlug } from "@/lib/services-detail-content";
import ServiceDetailHero from "./ServiceDetailHero";
import ServiceDetailOverview from "./ServiceDetailOverview";
import ServiceDetailOfferings from "./ServiceDetailOfferings";
import ServiceDetailWhy from "./ServiceDetailWhy";
import ServiceDetailProcess from "./ServiceDetailProcess";
import ServiceDetailFAQ from "./ServiceDetailFAQ";
import ServiceDetailRelated from "./ServiceDetailRelated";
import ServicesClosing from "../ServicesClosing";

export default function ServiceDetailPage({ slug }: { slug: ServiceDetailSlug }) {
  const detail = getServiceDetail(slug);

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <ServiceDetailHero detail={detail} />
      <ServiceDetailOverview overview={detail.overview} />
      <ServiceDetailOfferings offerings={detail.offerings} />
      <ServiceDetailWhy items={detail.why} />
      <ServiceDetailProcess />
      <ServiceDetailFAQ faqs={detail.faqs} />
      <ServiceDetailRelated currentSlug={slug} />
      <ServicesClosing />
      <HomeContact />
    </div>
  );
}
