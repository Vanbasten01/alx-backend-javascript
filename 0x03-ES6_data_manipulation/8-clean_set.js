export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') return undefined;

  if (!startString) return '';

  const filtredValues = Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  return filtredValues.join('-');
}
