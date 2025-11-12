declare module 'aos/dist/aos.css';
declare module "aos" {
  interface AosOptions {
    duration?: number;
    easing?: string;
    once?: boolean;
    delay?: number;
    offset?: number;
  }

  const AOS: {
    init(options?: AosOptions): void;
    refresh(): void;
  };

  export default AOS;
}
