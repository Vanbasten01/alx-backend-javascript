const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n');
    lines.shift();
    const StudentsNumber = lines.length;
    console.log(`Number of students: ${StudentsNumber}`);
    const countFields = {};
    const studentNames = {};
    lines.forEach((line) => {
      const firstName = line.split(',')[0];
      const field = line.split(',')[3];

      if (field in countFields) {
        countFields[field] += 1;
        studentNames[field].push(firstName);
      } else {
        studentNames[field] = [firstName];
        // studentNames[field].push(firstName);
        countFields[field] = 1;
      }
    });
    Object.keys(countFields).forEach((key) => {
      console.log(`Number of students in ${key}: ${countFields[key]}. List: ${studentNames[key].join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
