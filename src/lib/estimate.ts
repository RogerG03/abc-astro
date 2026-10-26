/** Demo arithmetic, not a quote or a financial forecast. */
export function estimate(hours: number, rate: number): number {
  if (!Number.isFinite(hours) || !Number.isFinite(rate) || hours < 0 || hours > 10000 || rate < 0 || rate > 10000) {
    throw new RangeError('Hours and rate must be finite numbers between 0 and 10000.');
  }
  return Math.round(hours * rate * 100) / 100;
}
