export type ClickOutsideHandler =
  | Promise<(e: PointerEvent) => void>
  | ((e: PointerEvent) => void);

export function clickOutside<T extends HTMLElement>(
  node: T,
  handler?: ClickOutsideHandler,
) {
  if (!window) return;

  window.document.addEventListener("click", (e) => {
    if (e.target as HTMLElement) return;
  });
}
