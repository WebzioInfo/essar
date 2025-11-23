// type LensEvents = {
//   follow: boolean;
//   move: { x: number; y: number };
// };

// type Handler<T> = (payload: T) => void;

// class EventBus<E extends Record<string, unknown>> {
//   private listeners: {
//     [K in keyof E]?: Handler<E[K]>[];
//   } = {};

//   on<K extends keyof E>(event: K, handler: Handler<E[K]>) {
//     (this.listeners[event] ||= []).push(handler);
//   }

//   off<K extends keyof E>(event: K, handler: Handler<E[K]>) {
//     const arr = this.listeners[event];
//     if (!arr) return;
//     this.listeners[event] = arr.filter((h) => h !== handler);
//   }

//   emit<K extends keyof E>(event: K, payload: E[K]) {
//     this.listeners[event]?.forEach((handler) => handler(payload));
//   }
// }

// export const lensEvents = new EventBus<LensEvents>();
