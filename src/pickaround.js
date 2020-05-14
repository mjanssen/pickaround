export default function pickAround(number, range, negative = true) {
  const r = Math.floor(range / 2);
  const result = [];
  for (let a = 0 - r; a < range - r; a += 1) {
    const p = number + a;
    if (p < 0 && negative === false) continue;
    result.push(p);
  }
  return result;
}
