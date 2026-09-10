const url = new URL(window.location.href);
const id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {
        const blockInfo = document.createElement('div');
        blockInfo.classList.add('user-info');

        const text = document.createElement('p');

        text.innerText = `
ID: ${user.id}

Name: ${user.name}
Username: ${user.username}

Email: ${user.email}
Phone: ${user.phone}

Website: ${user.website}

Address:
Street: ${user.address.street}
Suite: ${user.address.suite}
City: ${user.address.city}
Zipcode: ${user.address.zipcode}

Geo:
Latitude: ${user.address.geo.lat}
Longitude: ${user.address.geo.lng}

Company:
Name: ${user.company.name}
Catch Phrase: ${user.company.catchPhrase}
BS: ${user.company.bs}
        `;

        const postsBtn = document.createElement('button');
        postsBtn.innerText = 'Posts of current user';
        postsBtn.classList.add('posts-btn');

        const postsBlock = document.createElement('div');
        postsBlock.classList.add('posts-block');

        blockInfo.appendChild(text);
        document.body.appendChild(blockInfo);
        document.body.appendChild(postsBtn);
        document.body.appendChild(postsBlock);

        postsBtn.addEventListener('click', () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(response => response.json())
                .then(posts => {
                    postsBlock.innerHTML = '';

                    posts.forEach(post => {
                        const postBlock = document.createElement('div');
                        postBlock.classList.add('post-card');

                        const postTitle = document.createElement('p');
                        postTitle.innerText = post.title;

                        const link = document.createElement('a');
                        link.innerText = 'Подробнее';
                        link.href = `../post/post-details.html?id=${post.id}`;

                        postBlock.appendChild(postTitle);
                        postBlock.appendChild(link);

                        postsBlock.appendChild(postBlock);
                    });
                });
        });
    });
