let size = 10;
let orderElement = 1;

const init = () => {

    const btn = document.createElement('button');
    const btnReset = document.createElement('button');
    const ul = document.createElement('ul');
    ul.style.listStyle = "none";
    btn.textContent = "Dodaj 10 elementów listy";
    btnReset.textContent = "Wyczyść";
    document.body.appendChild(btn);
    document.body.appendChild(btnReset);
    document.body.appendChild(ul);
    btn.addEventListener('click', createLiElements)
    btnReset.addEventListener('click', clearList)

}

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const ul = document.querySelector('ul');
        let li = document.createElement('li');
        li.textContent = `element nr ${orderElement++}`
        ul.appendChild(li);
        li.style.fontSize = `${size++}px`;

    }
}

const clearList = () => {
    const ul = document.querySelector('ul')
    ul.textContent = "";
    orderElement = 1;
    size = 10;
}

init()