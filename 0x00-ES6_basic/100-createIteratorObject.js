export default function createIteratorObject(report) {
  const newArr = [];

  for (const value of Object.values(report.allEmployees)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        newArr.push(item);
      }
    } else {
      newArr.push(value);
    }
  }

  return newArr;
}
