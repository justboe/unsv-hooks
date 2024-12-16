export const is_client =
  typeof window !== "undefined" && typeof document !== "undefined";

// @ts-expect-error worker names

export const is_worker =
  typeof WorkerGlobalScope !== "undefined" &&
  globalThis instanceof WorkerGlobalScope;
export const isDef = <T = any>(val?: T): val is T => typeof val !== "undefined";
export const notNullish = <T = any>(val?: T | null | undefined): val is T =>
  val != null;
export const assert = (condition: boolean, ...infos: any[]) => {
  if (!condition) console.warn(...infos);
};
const toString = Object.prototype.toString;

export const isObject = (val: any): val is object =>
  toString.call(val) === "[object Object]";

export const now = () => Date.now();
export const timestamp = () => +Date.now();
export const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));
export const noop = () => {};
export const rand = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const hasOwn = <T extends object, K extends keyof T>(
  val: T,
  key: K,
): key is K => Object.prototype.hasOwnProperty.call(val, key);

export const IS_IOS = /* #__PURE__ */ getIsIOS();

function getIsIOS() {
  if (!is_client || !window.navigator.userAgent) return false;

  const touchp_gt2 = window?.navigator?.maxTouchPoints > 2;
  const mac_agent = /iPad|Macintosh/.test(window?.navigator.userAgent);
  const mobile_agent = /iP(?:ad|hone|od)/.test(window.navigator.userAgent);

  return mobile_agent || (touchp_gt2 && mac_agent);
}
