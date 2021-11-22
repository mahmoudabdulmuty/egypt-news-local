async function createArticle(apiLink) {
	document.querySelector('.main').textContent = '';
	const response = await fetch(apiLink);
	const responseText = await response.json();
	const articles = responseText.articles;
	if (articles.length === 0)
		document.querySelector('.main').innerHTML = 'No data Found';
	else {
		articles.forEach((article) => {
			const { title, description, url, urlToImage } = article;
			document.querySelector('.main').innerHTML += `
			<article class="article">
        <div class="article-img">
          <img src="${
						!urlToImage ||
						urlToImage.includes('muhtwaplus') ||
						urlToImage.includes('aljazeera.net')
							? './img/No-Image-Available.jpg'
							: urlToImage
					}"/>
        </div>
        <div class="article-heading">
          <h2 class="article-title">${title}</h2>
          <p class="article-description">${description ?? ''}</p>
        </div>
        <a class="article-link" target="_blank" href="${url}">قراءة المزيد</a>
      </article>`;
		});
	}
}

document.addEventListener('DOMContentLoaded', function () {
	createArticle('./json/data.json');
});

document
	.querySelector('.header-title-link')
	.addEventListener('click', function () {
		createArticle('./json/data.json');
	});

document.querySelector('.business').addEventListener('click', function () {
	createArticle('./json/business.json');
});

document.querySelector('.entertainment').addEventListener('click', function () {
	createArticle('./json/entertainment.json');
});

document.querySelector('.health').addEventListener('click', function () {
	createArticle('./json/health.json');
});

document.querySelector('.science').addEventListener('click', function () {
	createArticle('./json/science.json');
});

document.querySelector('.sports').addEventListener('click', function () {
	createArticle('./json/sports.json');
});

document.querySelector('.technology').addEventListener('click', function () {
	createArticle('./json/technology.json');
});
