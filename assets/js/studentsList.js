'use strict'

import { getStudentsByCourse, filterStudentsByStatus } from './studentsListFetch.js';

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
        <span class="student-name">${index.nome.toUpperCase()}</span>
    `;

    container.appendChild(card);

    card.addEventListener('click', (el) => {
        el.preventDefault();
        const studentEnrollment = index.matricula;

        localStorage.setItem('enrollment', studentEnrollment);

        location.href = './student.html';

        console.log(studentEnrollment);
    });
}


const sanitizeCards = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => card.remove())
}
const filterSelect = document.querySelector('#status-select');
let selectValue = document.querySelector('#status-select').value;

filterSelect.addEventListener('change', async () => {
    selectValue = document.querySelector('#status-select').value;
    studentsList = await filterStudentsByStatus(course, selectValue)
    
    sanitizeCards(); // limpando o container dos cards
    
    studentsList.forEach((e) => createStudentsCards(e)) // popula
});

studentsList.forEach(createStudentsCards);