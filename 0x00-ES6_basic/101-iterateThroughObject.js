export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  const i = reportWithIterator.length - 1;
  let j = 0;

  while (j < i) {
    str += reportWithIterator[j];
    str += ' | ';
    j += 1;
  }
  str += reportWithIterator[j];
  return str;
}
