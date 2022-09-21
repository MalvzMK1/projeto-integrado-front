'use strict'

const getStudentsByCourse = async (course) => {
    const url = `http://localhost:8080/?curso=${course}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

export {getStudentsByCourse};