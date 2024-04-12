/* eslint-disable @typescript-eslint/no-explicit-any */
const events = new Map<string, ((args: any) => void)[]>();

export default {
  $on(eventName: string, fn: (args: any) => void) {
    if (!events.has(eventName)) {
      events.set(eventName, []);
    }

    events.get(eventName)?.push(fn);
  },

  $off(eventName: string, fn: (args: any) => void) {
    throw { message: "Not implemented: " + eventName + fn };
  },

  $emit(eventName: string, data: any) {
    if (events.has(eventName)) {
      events.get(eventName)?.forEach((fn) => fn(data));
    }
  },
};
