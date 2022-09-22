'use strict'

const getStudentsByCourse = async (course) => {
    const url = `http://localhost:8080/alunos/curso/?curso=${course}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

const filterStudentsByStatus = async (course, status) => {
    const url = `http://localhost:8080/alunos/curso/?curso=${course}&status=${status}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

export {getStudentsByCourse, filterStudentsByStatus};