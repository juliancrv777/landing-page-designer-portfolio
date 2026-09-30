import { Site } from "@/components/Site";
import { business } from "@/data/business";

export default function Home() {
  return <Site business={business} />;
}
