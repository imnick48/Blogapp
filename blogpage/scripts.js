document.addEventListener('DOMContentLoaded', () => {
    const fetchBlogData = (slug) => {
      fetch(`http://localhost:3000/blogposts/${slug}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          const title=`<h1>${data.BlogTitle}</h1>`;
          document.getElementById('blogg').insertAdjacentHTML('afterbegin', title);
          const def=`<h1>${data.Littledes}</h1>`;
          document.getElementById('blogg').insertAdjacentHTML('beforeend', def);
          console.log(title);
        })
        .catch(err => {
          console.error('Fetch error:', err);
        });
    };
  
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
  
    const contentDiv = document.getElementById('content');
    if (slug) {
      fetchBlogData(slug);
    } 
  });
  