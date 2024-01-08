export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades) || typeof city !== 'string') {
    return undefined;
  }

  const filteredStudents = students.filter((student) => student.location === city)
    .map((student) => {
      const matchingGrades = newGrades.filter((newGrade) => newGrade.studentId === student.id);
      return {
        ...student,
        grade: matchingGrades.length > 0 ? matchingGrades[0].grade : 'N/A',
      };
    });

  return filteredStudents;
}
