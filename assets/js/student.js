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

const createGrade = (index) => {
    const container = document.querySelector('.scores');

    const gradeContainer = document.createElement('div');
    gradeContainer.classList.add('subject-score');

    const grade = document.createElement('span');
    grade.classList.add('score');
    grade.textContent = index.media;
    
    const progressBar = document.createElement('progress');
    progressBar.classList.add('score-progress');
    progressBar.max = '100';
    progressBar.value = index.media;
    
    const subjectInitials = document.createElement('span');
    subjectInitials.classList.add('subject-initials');
    subjectInitials.textContent = index.nome;

    gradeContainer.appendChild(grade);
    gradeContainer.appendChild(progressBar);
    gradeContainer.appendChild(subjectInitials);
    
    container.appendChild(gradeContainer)
    console.log(grade, progressBar, subjectInitials);
}

loadProfile()
studentSubjects.forEach(createGrade)