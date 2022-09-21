'use strict'

import {getCourses} from './coursesFetch.js';

let courses = await getCourses();

const createCards = async (array) => {
    const container = document.querySelector('#subjects-selection');
    const div = document.createElement('div');
    div.classList.add('subject');
    div.id = array.sigla.toLowerCase()
    div.innerHTML = `
        <img src="${array.icone}" class="subject-icon"></img>
        <span class="subject-title">${array.sigla}</span>
    `
    container.appendChild(div);

    div.addEventListener('click', (el) => {
        el.preventDefault(); 
        const course = div.id;

        localStorage.setItem('course', course);

        location.href = './assets/pages/students-list.html';
    })

}

courses.forEach(createCards)