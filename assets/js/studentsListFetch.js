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

const filterStudentsByStatusAndConclusionDate = async (course, status, date) => {
    const url = `http://localhost:8080/alunos/curso/?curso=${course}&status=${status}&conclusao=${date}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

const getYears = async (course) => {
    const url = `http://localhost:8080/conclusao/${course}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

export {
    getStudentsByCourse,
    filterStudentsByStatus,
    filterStudentsByStatusAndConclusionDate,
    getYears
};