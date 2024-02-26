const fs = require('fs');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
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
          countFields[field] = 1;
        }
      });
      Object.keys(countFields).forEach((key) => {
        console.log(`Number of students in ${key}: ${countFields[key]}. List: ${studentNames[key].join(', ')}`);
      });
      resolve();
    });
  });
}

module.exports = countStudents;
