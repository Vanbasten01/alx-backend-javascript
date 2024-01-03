export default function createEmployeesObject(departmentName, employees) {
  const EmployeesObj = {};
  EmployeesObj[departmentName] = employees;

  return EmployeesObj;
}
