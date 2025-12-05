import Image from "next/image";

type QuotationProps = {
  bpm: 40 | 60 | 90 | 120 | 180;
  automationType: "Semi Automatic" | "Fully Automatic";
  plantType: string;
  services: string[];
  projectTimeline: string;
  budget: string;
};

export default function QuotationCard({
  bpm,
  automationType,
  plantType,
  services,
  projectTimeline,
  budget,
}: QuotationProps) {
  const costTable = {
    40: { semi: "95–110 Lakhs", full: "135–150 Lakhs" },
    60: { semi: "120–140 Lakhs", full: "165–185 Lakhs" },
    90: { semi: "165–180 Lakhs", full: "210–235 Lakhs" },
    120: { semi: "200–230 Lakhs", full: "260–290 Lakhs" },
    180: { semi: "270–300 Lakhs", full: "340–380 Lakhs" },
  } as const;

  const estimatedCost =
    automationType === "Semi Automatic"
      ? costTable[bpm].semi
      : costTable[bpm].full;

  return (
    <div className="w-full px-4 py-12 bg-black">
      <div className="max-w-4xl mt-8 md:mt-16 mx-auto p-8 border rounded-2xl shadow-lg bg-white text-black">
        {/* Header */}
        <div className="flex  gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl text-green-700 sm:text-lg lg:text-4xl font-bold leading-snug">
            Proposal for {automationType} <br />
            {plantType} Plant
          </h1>
          <div className="flex justify-start sm:justify-end">
            <Image
              src="/logo.png"
              alt="Essar Enterprises"
              width={96}
              height={96} 
              className="opacity-60"
            />
          </div>
        </div>

        <hr className="my-6" />

        {/* Top info */}
        <div className="space-y-6 text-base sm:text-lg leading-relaxed">
          <div>
            <div className="font-semibold">Production Capacity</div>
            <div className="font-bold text-lg sm:text-xl">{bpm} BPM + 1600 Jars / Shift (10 Hr.)</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="font-semibold">Production Speed</div>
              <p className="font-bold">{bpm} Bottle / minute <br /> 200 Jars / hour</p>
            </div>

            <div>
              <div className="font-semibold">Project Duration</div>
              <p className="font-bold">{projectTimeline}</p>
            </div>
          </div>

          {/* Cost */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border rounded-xl p-4 sm:p-5 bg-gray-50">
            <div>
              <div className="font-semibold">Estimated Project Cost</div>
              <p className="text-xl sm:text-2xl font-bold">{budget || estimatedCost}</p>
            </div>

            <div>
              <div className="font-semibold text-green-700">Return of Investment</div>
              <p className="text-xl sm:text-2xl font-bold text-green-700">36 Months</p>
            </div>
          </div>

          {/* Selected Services */}
          {services.length > 0 && (
            <div>
              <div className="font-semibold mb-2">Services Included</div>
              <ul className="list-disc list-inside">
                {services.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
          )}
        </div>

        <hr className="my-8" />

        {/* We Do / You Do */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 text-base sm:text-lg">
          <div>
            <h3 className="font-bold text-green-700 mb-2">What We Do</h3>
            <ul className="space-y-1.5">
              <li>• Licenses & Paper Works</li>
              <li>• Project Design & Planning</li>
              <li>• Plant Design & Development</li>
              <li>• Lab Setup & Training</li>
              <li>• Construction Supervision</li>
              <li>• QC Setup & Training</li>
              <li>• Branding & Label Design</li>
              <li>• Website Development</li>
              <li>• Operational & Production Training</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-blue-700 mb-2">What You Do</h3>
            <ul className="space-y-1.5">
              <li>• HR Management</li>
              <li>• Operations</li>
              <li>• Sales</li>
            </ul>
          </div>
        </div>

        <hr className="my-8" />

        {/* Footer */}
        <div className="text-center text-xs sm:text-sm text-gray-500">
          © 2025 Essar Enterprises — Complete Packaged Drinking Water Plant Solutions
        </div>
      </div>
    </div>
  );
}
