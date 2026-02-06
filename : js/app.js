import { languages } from './data.languages.js';

const container = document.getElementById('container');

const render = () => {
    container.innerHTML = languages.map(lang => `
        <div class="card">
            <div class="icon">${lang.icon}</div>
            <h3>${lang.title}</h3>
            <p>${lang.desc}</p>
            <button class="btn" onclick="location.href='learn.html?id=${lang.id}'">
                Belajar
            </button>
        </div>
    `).join('');
};

render();
