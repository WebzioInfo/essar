export type LocationPageContent = {
  slug: string;
  name: string;
  description: string;
};

export const locations: LocationPageContent[] = [
  {
    slug: "kerala",
    name: "Kerala",
    description: "Packaged drinking water plant consulting for Kerala investors, plant owners, and brand founders.",
  },
  {
    slug: "karnataka",
    name: "Karnataka",
    description: "Water plant planning, licensing, and launch support for Karnataka projects.",
  },
  {
    slug: "tamil-nadu",
    name: "Tamil Nadu",
    description: "Turnkey packaged drinking water consultancy for Tamil Nadu plant launches and upgrades.",
  },
  {
    slug: "bangalore",
    name: "Bangalore",
    description: "Water business consultants in Bangalore for plant planning, machinery selection, and licensing support.",
  },
  {
    slug: "chennai",
    name: "Chennai",
    description: "Packaged drinking water plant consultancy in Chennai for investors and operating plants.",
  },
  {
    slug: "south-india",
    name: "South India",
    description: "Essar supports packaged drinking water businesses across South India.",
  },
];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}
