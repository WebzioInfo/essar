type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (event: "event", action: string, params?: AnalyticsParams) => void;
    clarity?: (event: "event", action: string) => void;
  }
}

export function trackEvent(action: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") {
    return;
  }

  window.gtag?.("event", action, params);
  window.clarity?.("event", action);
}

export function trackCtaClick(label: string, destination: string) {
  trackEvent("cta_click", { label, destination });
}

export function trackLeadSubmitted(source: string) {
  trackEvent("lead_submitted", { source });
}

export function trackCalculatorStep(step: number) {
  trackEvent("calculator_step", { step });
}
