const textoAtividade = document.querySelector('.textoAtividade');
const botaoAdd = document.querySelector('.addAtividade');
const lista = document.querySelector('.listaAtividade');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

textoAtividade.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!textoAtividade.value) return;
        criaAtividade(textoAtividade.value);
    }
})

function limpaInput() {
    textoAtividade.value = '';
    textoAtividade.focus();
}

function botaoQueTira(li) {
    li.innerText += ' ';
    const clearButton = document.createElement('button');
    clearButton.innerText = 'Clear';
    clearButton.setAttribute('class', 'clear');
    clearButton.setAttribute('tittle', 'Clear this activity');
    li.appendChild(clearButton)
}

function criaAtividade(inputText) {
    const li = criaLi();
    li.innerText = inputText;
    lista.appendChild(li);
    limpaInput();
    botaoQueTira(li);
    salvaAtividade();
}

botaoAdd.addEventListener('click', function (e) {
    if (!textoAtividade.value) return;
    criaAtividade(textoAtividade.value);
})

document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('clear')) {
        el.parentElement.remove();
        salvaAtividade();
    }
})

function salvaAtividade() {
    const liActivities = lista.querySelector('li');
    const listaList = [];

    for (let lista of listaList) {
        const listaText = lista.innerText;
        listaText = listaText.replace('clear', ' ').trim();
        listaList.push(listaText);
    }
    const listaJSON = JSON.stringify(listaList);
    localStorage.setItem('lista', listaJSON);
}

function addSaveActivities() {
    const lista = localStorage.getItem('lista');
    const listaList = JSON.parse(lista);
    for (let lista of listaList) {
        criaAtividade(lista);
    }
}

addSaveActivities()