'use strict'

import {getCourses} from './coursesFetch.js';

let courses = await getCourses();

const createCards = async (array) => {
    const container = document.querySelector('#subjects-selection');
    const div = document.createElement('div');
    div.classList.add('subject');
    div.id = array.sigla.toLowerCase()
    div.innerHTML = `
        <img id="${array.sigla.toLowerCase()}" src="${array.icone}" class="subject-icon"></img>
        <span id="${array.sigla.toLowerCase()}" class="subject-title">${array.sigla}</span>
    `

    div.addEventListener('click', (el) => {
        el.preventDefault(); 
        const course = el.target.id

        localStorage.setItem('course', course);

        location.href = './assets/pages/students-list.html'

        console.log(course)
    })

    container.appendChild(div);
}

courses.forEach(createCards)