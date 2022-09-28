'use strict'

const getStudentsByCourse = async (course) => {
    const url = `https://api-senai-projeto-integrado.netlify.app/.netlify/functions/api/alunos/curso/?curso=${course}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

const filterStudentsByStatusAndConclusionDate = async (course, status, date) => {
    const url = `https://api-senai-projeto-integrado.netlify.app/.netlify/functions/api/alunos/curso/?curso=${course}&status=${status}&conclusao=${date}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

const getYears = async (course, status) => {
    const url = `https://api-senai-projeto-integrado.netlify.app/.netlify/functions/api/conclusao/?curso=${course}&status=${status}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

export {
    getStudentsByCourse,
    filterStudentsByStatusAndConclusionDate,
    getYears
};