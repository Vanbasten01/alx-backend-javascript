export default function getStudentsByLocation(objs, string) {
  if (!Array.isArray(objs) || typeof string !== 'string') {
    return undefined;
  }
  const filtredObjs = objs.filter((obj) => obj.location === string);
  return filtredObjs;
}
