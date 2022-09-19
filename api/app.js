const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { getStudentsByCourse, getSubjects, getStudent, getStudents, getStudentsByStatus } = require('./modules/alunos.js');

const app = express()

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    app.use(cors());

    next()
});

app.get('/alunos', cors(), async (request, response, next) => {
    let studentsList = getStudents();

    if (studentsList) {
        response.status(200);
        response.json(studentsList);
    } else {
        response.status(404);
    }
});

app.get('/?', cors(), async (request, response, next) => {
    let course = request.query.curso;
    
    let studentsList = getStudentsByCourse(course)

    if (studentsList) {
        response.status(200);
        response.json(studentsList);
    } else {
        response.status(404);
    }
});

app.get('/aluno/:matricula', cors(), async (request, response, next) => {
    let studentEnrollment = request.params.matricula;
    let studentInfo = getStudent(studentEnrollment);

    if (studentInfo) {
        response.status(200);
        response.json(studentInfo);
    } else {
        response.status(404);
    }
});

app.get('/:matricula/disciplinas', cors(), async (request, response, next) => {
    let studentEnrollment = request.params.matricula;
    let studentInfo = getStudent(studentEnrollment);

    let subjects = getSubjects(studentInfo)

    if (subjects) {
        response.status(200);
        response.json(subjects);
    } else {
        response.status(404);
    }
});

app.get('/:status/aluno', cors(), async (request, response, next) => {
    let status = request.params.status;
    let studentsList = getStudentsByStatus(status);

    if (studentsList) {
        response.status(200);
        response.json(studentsList);
    } else {
        response.status(404);
    }
});

app.listen(8080, function() {
    console.log('Server waiting for requests...');
});