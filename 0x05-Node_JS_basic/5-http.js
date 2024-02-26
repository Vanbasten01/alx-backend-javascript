const http = require('http');
const fs = require('fs');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      let output = '';
      const lines = data.trim().split('\n');
      lines.shift();
      const StudentsNumber = lines.length;
      output += `\nNumber of students: ${StudentsNumber}`;
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
        output += `\nNumber of students in ${key}: ${countFields[key]}. List: ${studentNames[key].join(', ')}`;
      });
      resolve(output);
    });
  });
}

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.end(`This is the list of our students${data}`);
      })
      .catch((err) => {
        res.end(`This is the list of our students\n${err.message}`);
      });
  }
});

app.listen(1245, () => {});
module.exports = app;
