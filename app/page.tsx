import { Site } from "@/components/Site";
import { maisonAura } from "@/data/businesses/maison-aura";

export default function Home() {
  return <Site business={maisonAura} />;
}
