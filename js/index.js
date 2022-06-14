// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
const urlAPI = 'https://randomuser.me/api/';

const newUser = (url) => {
    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.
    fetch(url).then(response => response.json().then(data => {
        const card = document.querySelector('.card');
    
        if (card) {
            const main = document.querySelector('main');
            console.log(main)
            main.removeChild(card);
        };

        const newCard = document.createElement('div');
        newCard.className = 'card';
        const name = document.createElement('h3');
        const email = document.createElement('p');
        const picture = document.createElement('img');
        
        name.innerHTML = `${data.results[0].name.first}` + ' ' + `${data.results[0].name.last}`;
        picture.src = `${data.results[0].picture.medium}`;
        email.innerHTML = `${data.results[0].email}`;
        
        newCard.appendChild(picture);
        newCard.appendChild(name);
        newCard.appendChild(email);
        
        const main = document.querySelector('main');
        main.appendChild(newCard);
    }));
};

newUser(urlAPI);

/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.
const btnRandom = document.querySelector('#random');

btnRandom.addEventListener('click', () => {
    newUser(urlAPI);
});
