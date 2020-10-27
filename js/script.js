const optArticleSelector = '.post',
optTitleSelector = '.post-title',
optTitleListSelector = '.titles',
optTitleListLinkSelector = '.titles a',
optArticleTagsSelector = '.post-tags .list',
optArticleAuthorSelector = '.post-author',
optTagsListSelector = '.list .tags',
optCloudClassCount = 5,
optCloudClassPrefix = 'tag-size-'; 


const titleClickHandler = function(event){
const clickedElement = this;
console.log('Link was clicked!');

event.preventDefault();

/* [DONE] remove class 'active' from all article links  */

const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
activeLink.classList.remove('active');
}

/* [IN PROGRESS] add class 'active' to the clicked link */

console.log('clickedElement:', clickedElement);
clickedElement.classList.add('active');

/* [DONE] remove class 'active' from all articles */

const activeArticles = document.querySelectorAll('.post.active');
for (let activeArticle of activeArticles) {
activeArticle.classList.remove('active');
}

/* get 'href' attribute from the clicked link */

const clickedLink = clickedElement.getAttribute('href');
console.log('clickedLink: ', clickedLink);

/* find the correct article using the selector (value of 'href' attribute) */

const targetArticle = document.querySelector(clickedLink);
console.log('Article: ', targetArticle);

/* add class 'active' to the correct article */

targetArticle.classList.add('active');
}

function generateTitleLinks() {

/* remove contents of titleList */
const titleList = document.querySelector(optTitleListSelector);
titleList.innerHTML = '';
let html = '';

/* for each article */
const articles = document.querySelectorAll(optArticleSelector);
for (const article of articles) {

/* get the article id */
const articleId = article.getAttribute('id');

/* find the title element */
const articleTitle = article.querySelector(optTitleSelector).innerHTML;

/* create HTML of the link */

const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

/* insert link into titleList */

html = html + linkHTML;
}

titleList.innerHTML = html;

const links = document.querySelectorAll(optTitleListLinkSelector)
for(let link of links){
link.addEventListener('click', titleClickHandler);
}
}

generateTitleLinks();

function generateTags() {
    const articles = document.querySelectorAll(optArticleSelector);
    for (const article of articles) {

        // szukamy listy tagów w danym artykule (na tym etapie jest ona pusta)
        const tagsList = article.querySelector('.list-horizontal');

        // ustalamy zawartość atrybutu data-tags (np. 'code news')
        const articleTags = article.getAttribute('data-tags');

        // konwertujemy nasz tekst (np. 'code news test') na tablicę (np. ['code', 'news', 'test'])
        const tags = articleTags.split(' ');

        let html = '';

        for(const tag of tags) {
            // linkHTML = <li><a href="#tag-code"><span>code</span></a></li>
            const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
            html = html + linkHTML;
        }

        tagsList.innerHTML = html;
    }
}

generateTags();


function generateAuthors() {
    debugger;
    const articles = document.querySelectorAll(optArticleSelector);
    for (const article of articles) {

        // szukamy paragrafu autora w danym artykule (na tym etapie jest ona pusta)
        const authorWrapper = article.querySelector('.post-author');

        // ustalamy zawartość atrybutu data-author (np. 'Marion Berry')
        const author = article.getAttribute('data-author');

        // przygotowuejmy link do autora
        const linkHTML = '<a href="#author-' + author + '"><span>' + author + '</span></a>';
        //<a href="#author-Marion Berry"><span>Martion Berry</span></a>';

        authorWrapper.innerHTML = linkHTML;
    }
}

generateAuthors();
