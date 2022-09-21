'use strict'

const getStudentInfo = async (enrollment) => {
    const url = `http://localhost:8080/aluno/${enrollment}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

const getSubjects = async (enrollment) => {
    const url = `http://localhost:8080/${enrollment}/disciplinas`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

export {getStudentInfo, getSubjects};