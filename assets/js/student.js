'use strict'

import {getStudentInfo, getSubjects} from './studentFetch.js';
import createSubjectInitials from './utils/createInitials.js';

const enrollment = localStorage.getItem('enrollment');

const studentInfo = await getStudentInfo(enrollment);
const studentSubjects = await getSubjects(enrollment);

const loadProfile = () => {
    const profileContainer = document.querySelector('.profile');

    const photo = document.createElement('img');
    photo.classList.add('profile-photo');
    photo.src = studentInfo.photo;
    photo.alt = 'Foto do Estudante';

    const name = document.createElement('span');
    name.classList.add('profile-name');
    name.textContent = studentInfo.name.toUpperCase();

    profileContainer.appendChild(photo);
    profileContainer.appendChild(name);
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
    subjectInitials.textContent = createSubjectInitials(index.nome);

    gradeContainer.appendChild(grade);
    gradeContainer.appendChild(progressBar);
    gradeContainer.appendChild(subjectInitials);
    
    container.appendChild(gradeContainer)
}

loadProfile()
studentSubjects.forEach(createGrade)