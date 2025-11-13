// utils/css.ts
export function cssVars(vars: Record<string, string | number | undefined>) {
  const out: Record<string, string> = {};
  for (const k in vars) {
    const v = vars[k];
    if (v === undefined) continue;
    out[k] = typeof v === "number" ? String(v) : v;
  }
  return out;
}
