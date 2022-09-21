'use strict'

const getCourses = async () => {
    const url = 'http://localhost:8080/cursos';
    const response = await fetch(url);
    const data = await response.json();

    return data
}

export { getCourses };