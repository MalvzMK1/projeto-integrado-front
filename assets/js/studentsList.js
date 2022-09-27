'use strict'

import { getStudentsByCourse,
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

const sanitizeOptions = () => {
    const option = document.querySelectorAll('.year-option');
    option.forEach((option) => option.remove())
}

const statusFilterSelect = document.querySelector('#status-select');
let statusSelectValue = document.querySelector('#status-select').value;
const yearSelectInput = document.querySelector('#conclusion-select');
let yearSelectInputValue = document.querySelector('#conclusion-select').value;

// if (statusSelectValue == 'status') {
//     statusSelectValue = undefined;
// }

const createYearsOptions = async (year) => {
    const yearOption = document.createElement('option');
    yearOption.value = year;
    yearOption.textContent = year;
    yearOption.classList.add('year-option');
    
    yearSelectInput.appendChild(yearOption);
}

let years = await getYears(course, statusSelectValue);
years.forEach(createYearsOptions);

studentsList.forEach(createStudentsCards);

statusFilterSelect.addEventListener('change', async () => {
    statusSelectValue = document.querySelector('#status-select').value;
    yearSelectInputValue = document.querySelector('#conclusion-select').value;

    studentsList = await filterStudentsByStatusAndConclusionDate(course, statusSelectValue, yearSelectInputValue);
    years = await getYears(course, statusSelectValue);
    sanitizeOptions();
    years.forEach(createYearsOptions);


    sanitizeCards(); // limpando o container dos cards

    if (studentsList) {
        studentsList.forEach((e) => createStudentsCards(e)) // popula
    }
});

yearSelectInput.addEventListener('change', async () => {
    yearSelectInputValue = document.querySelector('#conclusion-select').value;
    statusSelectValue = document.querySelector('#status-select').value;
    
    studentsList = await filterStudentsByStatusAndConclusionDate(course, statusSelectValue, yearSelectInputValue);
    
    sanitizeCards();
    
    if (studentsList) {
        studentsList.forEach((e) => createStudentsCards(e))
    }
});
