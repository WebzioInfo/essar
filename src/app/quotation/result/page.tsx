import QuotationCard from "@/app/components/QuotationCard";
import { redirect } from "next/navigation";

type BPM = 40 | 60 | 90 | 120 | 180;
type AutomationType = "Semi Automatic" | "Fully Automatic";

type QuotationResultProps = {
  searchParams?: Promise<{
    bpm?: string;
    type?: AutomationType;
    plantType?: string;
    services?: string;
    projectTimeline?: string;
    budget?: string;
  }>;
};

export default async function QuotationResult({ searchParams }: QuotationResultProps) {
  const params = (await searchParams) || {};

  if (!params.bpm || !params.type) {
    redirect("/quotation");
  }

  const bpm = Number(params.bpm) || 120;
  const type = params.type || "Fully Automatic";

  const validBpm: BPM[] = [40, 60, 90, 120, 180];
  const validType: AutomationType[] = ["Semi Automatic", "Fully Automatic"];

  if (!validBpm.includes(bpm as BPM) || !validType.includes(type)) {
    redirect("/quotation");
  }

  const plantType = params.plantType || "Packaged Bottled Water";
  const services = params.services?.split(",") || [];
  const projectTimeline = params.projectTimeline || "3-6 months";
  const budget = params.budget || "-";

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
