const url = new URL(window.location.href);
const postId = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        const divBlock = document.createElement('div');
        divBlock.classList.add('postBlock');
        const textBlock = document.createElement('p');
        textBlock.innerText = `
        User ID: ${post.userId}
        ID: ${post.id}
        Title: ${post.title}
        Body: ${post.body}
        `;
        divBlock.appendChild(textBlock);
        document.body.appendChild(divBlock);

            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(comments => {
                comments.forEach(comment => {
                    const commentBlock = document.createElement('div');
                    commentBlock.classList.add('commentBlock');
                    const textComment = document.createElement('p');
                    textComment.innerText = `
            Post ID: ${comment.postId}
            ID: ${comment.id}
            Name: ${comment.name}
            Email: ${comment.email}
            Body: ${comment.body}
            `;
                    commentBlock.appendChild(textComment);
                    document.body.appendChild(commentBlock);
                });

        });
});
