const fs = require('fs');

async function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.trim().split('\n');
      lines.shift();
      const studentNames = {};
      lines.forEach((line) => {
        const firstName = line.split(',')[0];
        const field = line.split(',')[3];

        if (field in studentNames) {
          studentNames[field].push(firstName);
        } else {
          studentNames[field] = [firstName];
        }
      });
      resolve(studentNames);
    });
  });
}

export default readDatabase;
