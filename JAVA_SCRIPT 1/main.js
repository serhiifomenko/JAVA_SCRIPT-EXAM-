const error = document.querySelector('#error');
const input = document.querySelector('#name');
const addBtn = document.querySelector('#add-btn');
const pairList = document.querySelector('#pair-list');
const sortBtn = document.querySelector('#sort-name-btn');
const sortValue = document.querySelector('#sort-value-btn');
const deleteBtn = document.querySelector('#delete-btn');


const items = [];

function renderItems() {

    pairList.innerHTML = '';

    for (const item of items) {
        const option = document.createElement('option');

        option.textContent = `${item.name}=${item.value}`;

        pairList.appendChild(option);
    }
}

addBtn.addEventListener('click', () => {
    error.textContent = '';

    const parts = input.value.split('=');

    if (parts.length !== 2) {
        error.textContent = 'Введите пару с одним знаком =';
        return;
    }

    const name = parts[0].trim();
    const value = parts[1].trim();

    if (name === '' || value === '') {
        error.textContent = 'Название и значение не должны быть пустыми';
        return;
    }

    const allowed = /^[a-zA-Z0-9]+$/;

    if (!allowed.test(name) || !allowed.test(value)) {
        error.textContent = 'Разрешены только латинские буквы и цифры';
        return;
    }

    items.push({ name: name, value: value });

    renderItems();
    input.value = '';
});

sortBtn.addEventListener('click', () => {
    items.sort((a, b) => a.name.localeCompare(b.name));

    renderItems();
});

sortValue.addEventListener('click', () => {
    items.sort((a, b) => a.value.localeCompare(b.value));

    renderItems();
});

deleteBtn.addEventListener('click', () => {

    for (let i = items.length - 1; i >= 0; i--) {
        if (pairList.options[i].selected) {
            items.splice(i, 1);
        }
    }

    error.textContent = '';
    renderItems();
});
