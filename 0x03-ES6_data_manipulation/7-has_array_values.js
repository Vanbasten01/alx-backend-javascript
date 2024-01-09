export default function hasValuesFromArray(set, array) {
  const mySet2 = new Set(array);
  for (const item of mySet2) {
    if (!set.has(item)) {
      return false;
    }
  }
  return true;
}
