export default function setFromArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }
  return new Set(array);
}
