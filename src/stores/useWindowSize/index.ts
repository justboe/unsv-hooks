import { writable } from "svelte/store";
import { is_client } from "../../shared/is";

export type UseWindowSizeOptions = {
  initial_width?: number;
  initial_height?: number;
};

export function useWindowSize(opts?: UseWindowSizeOptions) {
  const width = writable(opts?.initial_width || 0);
  const height = writable(opts?.initial_height || 0);

  if (is_client) {
  }

  return { height, width };
}
