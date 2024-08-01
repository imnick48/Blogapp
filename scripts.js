fetch("http://localhost:3000")
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.length; i += 2) {
      const markup = `
        <div class="rblog">
          <img class="rgblog2img" src="../images/snake.jpg">
          <div class="text2">
            ${data[i].Littledes}
            <a href="blogpage/?slug=${data[i].slug}">read more</a>
          </div>
        </div>
      `;
      document.getElementById('xyz').insertAdjacentHTML('beforeend', markup);
      if ((i + 1) < data.length) {
        const nextMarkup = `
          <div class="rblog">
            <div class="text" id="text">
              ${data[i + 1].Littledes}
              <a href="blogpage/?slug=${data[i + 1].slug}">read more</a>
            </div>
            <img class="mainimg" src="../images/snake.jpg"></img>
          </div>
        `;
        document.getElementById('xyz').insertAdjacentHTML('beforeend', nextMarkup);
      }
    }
  })
  .catch(err => console.log('Fetch error:', err));
  fetch("http://localhost:3000")
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.length; i += 2) {
      const markup = `
        <div class="rblog">
          <img class="rgblog2img" src="../images/snake.jpg">
          <div class="text2">
            ${data[i].Littledes}
            <a href="blogpage?slug=${data[i].slug}">read more</a>
          </div>
        </div>
      `;
      document.getElementById('xyz').insertAdjacentHTML('beforeend', markup);
      if ((i + 1) < data.length) {
        const nextMarkup = `
          <div class="rblog">
            <div class="text" id="text">
              ${data[i + 1].Littledes}
              <a href="blogpage?slug=${data[i + 1].slug}">read more</a>
            </div>
            <img class="mainimg" src="../images/snake.jpg"></img>
          </div>
        `;
        document.getElementById('xyz').insertAdjacentHTML('beforeend', nextMarkup);
      }
    }
  })
  .catch(err => console.log('Fetch error:', err));
