'use strict'

import { getStudentsByCourse, 
    filterStudentsByStatus, 
    filterStudentsByStatusAndConclusionDate, 
    getYears } from './studentsListFetch.js';

import { getCourses } from './coursesFetch.js';

const course = localStorage.getItem('course');
const courses = await getCourses();
let titleContent = '';

courses.forEach(index => {
    if (index.sigla.toLowerCase() == course) {
        titleContent = index.nome.split(' - ')[1].replace('Técnico em ', '');
    }
});

let studentsList = await getStudentsByCourse(course);

const changeTile = () => {
    const title = document.querySelector('#subject-name');
    title.textContent = titleContent;
}

changeTile();

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

const yearSelectInput = document.querySelector('#conclusion-select');

const createYearsOptions = async (year) => {
    const yearOption = document.createElement('option');
    yearOption.value = year;
    yearOption.textContent = year;

    yearSelectInput.appendChild(yearOption);
}

let years = await getYears(course);
console.log(years)
years.forEach(createYearsOptions);