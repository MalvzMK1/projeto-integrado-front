'use strict'

const getStudentInfo = async (enrollment) => {
    const url = `https://api-senai-projeto-integrado.netlify.app/.netlify/functions/api/aluno/${enrollment}`;
    const response = await fetch(url);
    const { studentInfo } = await response.json();

    return studentInfo;
}

const getSubjects = async (enrollment) => {
    const url = `https://api-senai-projeto-integrado.netlify.app/.netlify/functions/api/${enrollment}/disciplinas`;
    const response = await fetch(url);
    const { subjects } = await response.json();

    return subjects;
}

export {getStudentInfo, getSubjects};