import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Site } from "@/components/Site";
import { getBusiness, getBusinessSlugs } from "@/data/businesses";

type PreviewPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getBusinessSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PreviewPageProps): Promise<Metadata> {
  const { slug } = await params;
  const business = getBusiness(slug);

  if (!business) {
    return {};
  }

  return {
    title: business.brand + " — Conceito de site",
    description:
      "Prévia demonstrativa de presença digital para " + business.brand + ".",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function PreviewPage({ params }: PreviewPageProps) {
  const { slug } = await params;
  const business = getBusiness(slug);

  if (!business) {
    notFound();
  }

  return <Site business={business} />;
}
