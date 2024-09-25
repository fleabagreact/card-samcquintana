document.getElementById('toggle-theme').addEventListener('click', function() {
    const body = document.body;
    const themeIcon = document.querySelector('#toggle-theme i');
    const themeLink = document.getElementById('theme-link');

    if (!themeLink) {
        console.error('Theme link element not found!');
        return;
    }

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeLink.setAttribute('href', 'styles/dark-mode.css');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeLink.setAttribute('href', 'styles/style.css');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});


function togglePanel(content, triggerId) {
    const panel = document.getElementById("right-panel");
    const contentElement = document.querySelector('.main-content');
    
    if (panel.classList.contains("open") && panel.getAttribute("data-opened") === triggerId) {
        panel.classList.remove("open");
        contentElement.classList.remove('with-panel');
        setTimeout(() => {
            panel.innerHTML = "";
        }, 400);
    } else {
        if (panel.classList.contains("open")) {
            panel.classList.remove("open");
            setTimeout(() => {
                panel.innerHTML = content;
                panel.setAttribute("data-opened", triggerId);
                panel.classList.add("open");
                contentElement.classList.add('with-panel');
            }, 400);
        } else {
            panel.innerHTML = content;
            panel.setAttribute("data-opened", triggerId);
            panel.classList.add("open");
            contentElement.classList.add('with-panel');
        }
    }
}

document.getElementById("sobre-autora").addEventListener("click", function() {
    const content = `
        <div class="author-info">
            <h4>Sobre a Autora</h4>
            <p>Samanta escreve desde que se entende por gente, e apesar de não ter nada publicado (ainda), tem criatividade pra dar e vender.</p>
            <p>Com uma escrita focada no tempo psicológico dos personagens, "Eu espero que você goste de Taylor Swift" chega em janeiro na loja Kindle</p>
        </div>
    `;
    togglePanel(content, "sobre-autora");
});

document.getElementById("obras").addEventListener("click", function() {
    const content = `
        <div class="works-info">
            <h4>Obras Publicadas</h4>
            <ul>
                <li>07•17</li>
                <li>Eu espero que você goste de Taylor Swift</li>
                <li>Os Segredos dos Bosques</li>
            </ul>
        </div>
    `;
    togglePanel(content, "obras");
});

document.getElementById("contato").addEventListener("click", function() {
    const content = `
        <div class="contact-info">
            <h4>Contato</h4>
            <p>Entre em contato com Samanta para saber mais sobre suas obras ou futuras publicações.</p>
            <p>Email: <a href="mailto:samcquintana@gmail.com">samcquintana@gmail.com</a></p>
        </div>
    `;
    togglePanel(content, "contato");
});