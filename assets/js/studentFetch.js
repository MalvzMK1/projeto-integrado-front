'use strict'

const getStudentInfo = async (enrollment) => {
    const url = `https://api-senai-projeto-integrado.netlify.app/.netlify/functions/api/aluno/${enrollment}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

const getSubjects = async (enrollment) => {
    const url = `https://api-senai-projeto-integrado.netlify.app/.netlify/functions/api/${enrollment}/disciplinas`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

export {getStudentInfo, getSubjects};