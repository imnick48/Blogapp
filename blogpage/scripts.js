document.addEventListener('DOMContentLoaded', () => {
    const blogContainer = document.getElementById('blogg');
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('slug');

    if (!postId) {
        blogContainer.innerHTML = '<p>Post not found</p>';
        return;
    }

    fetch(`http://localhost:8080/api/posts/${postId}`)
        .then(response => {
            if (!response.ok) throw new Error('Post not found');
            return response.json();
        })
        .then(post => {
            blogContainer.innerHTML = `
                <h1>${post.title}</h1>
                <p class="meta">By ${post.author} on ${new Date(post.createdAt).toLocaleDateString()}</p>
                <div class="content">${post.content}</div>
                <a href="../index.html" class="back-link">← Back to all posts</a>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
            blogContainer.innerHTML = `<p>Error loading post: ${error.message}</p>`;
        });
});
