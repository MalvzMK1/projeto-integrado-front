'use strict'

import {getStudentInfo, getSubjects} from './studentFetch.js';

const enrollment = localStorage.getItem('enrollment');

const studentInfo = await getStudentInfo(enrollment);
const studentSubjects = await getSubjects(enrollment);

const loadProfile = () => {
    const main = document.querySelector('main');
    const profileContainer = document.createElement('div');
    profileContainer.classList.add('profile');
    profileContainer.innerHTML = `
    <img src="${studentInfo.photo}" alt="Foto do estudante" class="profile-photo">
    <p class="profile-name">${studentInfo.name.toUpperCase()}</p>
    `;

    main.appendChild(profileContainer);
}

const loadGrades = () => {
    const main = document.querySelector('main');
    const gradesContainer = document.createElement('div');
    gradesContainer.classList.add('scores');
    gradesContainer.innerHTML = `
    
    `

    main.appendChild(gradesContainer)
}

loadProfile()
// loadGrades()