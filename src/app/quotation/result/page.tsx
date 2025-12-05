import QuotationCard from "@/app/components/QuotationCard";
import { redirect } from "next/navigation";

type BPM = 40 | 60 | 90 | 120 | 180;
type AutomationType = "Semi Automatic" | "Fully Automatic";

type QuotationResultProps = {
  searchParams?: {
    bpm?: string;
    type?: AutomationType;
    plantType?: string;
    services?: string;
    projectTimeline?: string;
    budget?: string;
  };
};

export default function QuotationResult({ searchParams }: QuotationResultProps) {
  if (!searchParams?.bpm || !searchParams.type) {
    console.log("hsgvcahgdvcthe")
    redirect("/quotation");

  }

  const bpm = Number(searchParams.bpm) || 120;
  const type = searchParams.type || "Fully Automatic";

  const validBpm: BPM[] = [40, 60, 90, 120, 180];
  const validType: AutomationType[] = ["Semi Automatic", "Fully Automatic"];

  if (!validBpm.includes(bpm as BPM) || !validType.includes(type)) {
    redirect("/quotation");
  }

  const plantType = searchParams.plantType || "Packaged Bottled Water";
  const services = searchParams.services?.split(",") || [];
  const projectTimeline = searchParams.projectTimeline || "3-6 months";
  const budget = searchParams.budget || "-";

  return (
    <main className="min-h-screen p-8 bg-black">
      <QuotationCard
        bpm={bpm as BPM}
        automationType={type as AutomationType}
        plantType={plantType}
        services={services}
        projectTimeline={projectTimeline}
        budget={budget}
      />
    </main>
  );
}
