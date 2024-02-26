import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((data) => {
        const res = ['This is the list of our students'];
        Object.keys(data).sort().forEach((key) => {
          res.push(`Number of students in ${key}: ${data[key].length}. List: ${data[key].join(', ')}`);
        });
        response.status(200).send(res.join('\n'));
      }).catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const majors = ['CS', 'SWE'];
    readDatabase(process.argv[2])
      .then((data) => {
        if (majors.includes(major)) {
          response.status(200).send(`List: ${data[major].join(', ')}`);
        } else {
          response.status(500).send('Major parameter must be CS or SWE');
        }
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
