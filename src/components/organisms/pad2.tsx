export function pad2(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}
