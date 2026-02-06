import { languages } from './data.languages.js';

const container = document.getElementById('container');

const render = () => {
    container.innerHTML = languages.map(lang => `
        <div class="card">
            <div class="icon">${lang.icon}</div>
            <h3>${lang.title}</h3>
            <p>${lang.desc}</p>
            <button class="btn-link" data-id="${lang.id}">
                Belajar
            </button>
        </div>
    `).join('');

    // Tambahkan event listener untuk setiap tombol
    document.querySelectorAll('.btn-link').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            window.location.href = `learn.html?id=${id}`;
        });
    });
};

render();
