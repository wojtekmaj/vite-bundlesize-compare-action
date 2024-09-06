import type { AssetDiff } from './types.js';

export function sortDiffDescending(items: AssetDiff[]): AssetDiff[] {
  return items.sort((diff1, diff2) => Math.abs(diff2.diff) - Math.abs(diff1.diff));
}
