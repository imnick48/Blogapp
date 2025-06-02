document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts');
    
    // Fetch posts from backend API
    fetch('http://localhost:8080/api/posts')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postElement = document.createElement('article');
                postElement.className = 'post';
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p class="meta">By ${post.author} on ${new Date(post.createdAt).toLocaleDateString()}</p>
                    <p>${post.content.substring(0, 200)}...</p>
                    <a href="blogpage/index.html?slug=${post.id}" class="read-more">Read more</a>
                `;
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error:', error));
});
