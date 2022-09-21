'use strict'

import { getStudentsByCourse } from './studentsListFetch.js';

const course = localStorage.getItem('course');
let studentsList = await getStudentsByCourse(course);

const createStudentsCards = async (index) => {
    const container = document.querySelector('.cards-container');
    const card = document.createElement('div');
    card.classList.add('card');

    if (index.status.toLowerCase() ==  'cursando') {
        card.classList.add('yellow');
    } else if (index.status.toLowerCase() == 'finalizado') {
        card.classList.add('blue');
    }
    
    card.innerHTML = `
        <img src="${index.foto}" alt="Foto do Estudante" class="student-photo">
        <span class="student-name">${index.nome}</span>
    `;

    container.appendChild(card);

    // console.log(index.foto, index.nome, index.curso);
}

studentsList.forEach(createStudentsCards);

console.log(studentsList);