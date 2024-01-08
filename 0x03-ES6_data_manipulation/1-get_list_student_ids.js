export default function getListStudentIds(objs) {
  if (!Array.isArray(objs)) {
    return [];
  }
  const allIds = objs.map((obj) => obj.id);
  return allIds;
}
