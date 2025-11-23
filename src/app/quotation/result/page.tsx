import QuotationCard from "@/app/components/QuotationCard";
import { redirect } from "next/navigation";

type BPM = 40 | 60 | 90 | 120 | 180;
type AutomationType = "Semi Automatic" | "Fully Automatic";

export default function QuotationResult({ searchParams }: any) {

  const bpm = Number(searchParams.bpm);
  const type = searchParams.type;

  const validBpm: BPM[] = [40, 60, 90, 120, 180];
  const validType: AutomationType[] = ["Semi Automatic", "Fully Automatic"];

  if (!validBpm.includes(bpm as BPM) || !validType.includes(type)) {
    redirect("/quotation");
  }

  return (
    <main className="min-h-screen p-8">
      <QuotationCard bpm={bpm as BPM} automationType={type as AutomationType} />
    </main>
  );
}
