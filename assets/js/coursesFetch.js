'use strict'

const getCourses = async () => {
    const url = 'https://api-senai-projeto-integrado.netlify.app/.netlify/functions/api/cursos';
    const response = await fetch(url);
    const { courses } = await response.json();

    return courses
}

export { getCourses };