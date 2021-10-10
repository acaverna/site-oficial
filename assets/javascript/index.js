const iconesProjetos = document.querySelectorAll(".icon-project");
const linksProjetos = document.querySelectorAll(".links-projetos");

iconesProjetos.forEach((projeto) => {
    projeto.addEventListener('click', (el) => {
        el.preventDefault();
        const nomeProjeto = projeto.classList[1].replace('icon-', '');
        const projetoLinks = document.querySelector(`.${nomeProjeto}`);
        if (projetoLinks.style.display === 'block') {
            projetoLinks.style.display = 'none';
            return;
        }

        linksProjetos.forEach((linksProjeto) => {
            linksProjeto.style.display = 'none';
        });

        projetoLinks.style.display = 'block';
    })
})

