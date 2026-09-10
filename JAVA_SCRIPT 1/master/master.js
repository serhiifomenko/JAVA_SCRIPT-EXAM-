fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    console.log(users);
    users.forEach(user => {
        const userBlock = document.createElement('div');
        userBlock.classList.add('block');
        const textBlock = document.createElement('p');
        textBlock.classList.add('text');

        const link = document.createElement('a');
        link.innerText = 'Подробнее';
        link.href = `../user/user-details.html?id=${user.id}`;

        textBlock.textContent = `
        ${user.id} 
        ${user.name}
        `
        userBlock.appendChild(textBlock);
        userBlock.appendChild(link);
        document.body.appendChild(userBlock);
        localStorage.setItem('user', JSON.stringify('users'));
    });

});


