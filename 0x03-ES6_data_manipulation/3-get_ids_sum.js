export default function getStudentIdsSum(objs) {
  if (!Array.isArray(objs)) {
    return undefined;
  }
  const sumOfIds = objs.reduce((accu, obj) => accu + obj.id, 0);
  return sumOfIds;
}
