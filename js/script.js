const templates = {
  articleLink: Handlebars.compile(document.querySelector('#template-article-link').innerHTML)
}

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
const linkHTMLData = {id: articleId, title: articleTitle};
const linkHTML = templates.articleLink(linkHTMLData);

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

function tagClickHandler() {
  const clickedElement = this;

  const href = this.getAttribute('href'); // #tag-news
  const tag = href.replace('#tag-', ''); // news

  generateTitleLinks('[data-tags~="' + tag + '"]'); //[data-tags~="news"]
}

function addClickListenerToTags() {
  const links = document.querySelectorAll('a[href^="#tag-');
  for(const link of links) {
      link.addEventListener('click', tagClickHandler)
  }
}

addClickListenerToTags();

function authorClickHandler() {
  const clickedElement = this;

  const href = this.getAttribute('href'); // #author-Marion Berry
  const author = href.replace('#author-', ''); // Marion Berry

  generateTitleLinks('[data-author="' + author + '"]'); //[data-author="Marion Berry"]
}


function addClickListenerToAuthors() {
  const links = document.querySelectorAll('a[href^="#author-');
  for(const link of links) {
      link.addEventListener('click', authorClickHandler)
  }
}

addClickListenerToAuthors();

function resetClickHandler() {
  generateTitleLinks();
}

const resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener('click', resetClickHandler);

function generateTagsCloud() {
const tagsList = document.querySelector('.sidebar .tags');
tagsList.innerHTML = '';

// utworzenie pustej listy
const tagsPaper = [];

const articles = document.querySelectorAll('.post');
for(const article of articles) {
    const tags = article.getAttribute('data-tags'); //design tutorials
    const tagsArray = tags.split(' '); //['design', 'tutorials']

    for(const tag of tagsArray) {
        if(!tagsPaper.includes(tag)) {
            tagsPaper.push(tag);
        }
    }
}

let html = '';
for(const tag of tagsPaper) {
  const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
  html = html + linkHTML;
}

tagsList.innerHTML = html;

console.log(tagsPaper);
} 

generateTagsCloud();


function generateRightAuthors() {

const authorsList = document.querySelector('.sidebar .authors');
authorsList.innerHTML = '';

// utworzenie pustej listy
const authorsPaper = [];

const articles = document.querySelectorAll('.post');
for(const article of articles) {
    const author = article.getAttribute('data-author'); //Marion Berry
 
    if(!authorsPaper.includes(author)) {
      authorsPaper.push(author);
    }
}

let html = '';
for(const author of authorsPaper) {
  const linkHTML = '<li><a href="#author-' + author + '">' + author + '</a></li>';
  html = html + linkHTML;
}

authorsList.innerHTML = html;
} 

generateRightAuthors();

// zliczanie tagów

let tagsPaper = ();
if(!tagsPaper[tag]) {
    tagsPaper[tag] = 1;
  } else {
    tagsPaper[tag]++;
  }
  console.log(tagsPaper);

function generateTags()  
  
  const tagsParams = calculateTagsParams(tagsPaper);
  console.log('tagsParams:', tagsParams)

  function calculateTagsParams(tags) {
    const params = {
      max: 0,
      min: 999999
    };
    for (let tag in tags) {
      console.log(tag + ' is used ' + tags[tag] + ' times');
      if (tags[tag] > params.max) {
        params.max = tags[tag];
      }
      if (tags[tag] < params.min) {
        params.min = tags[tag];
      }
    }
    return params;
  }

  function calculateTagClass(count, params) {
 
    const normalizedCount = count - params.min;
    const normalizedMax = params.max - params.min;
    const percentage = normalizedCount / normalizedMax;
    const classNumber = Math.floor(percentage * (optCloudClassCount - 1) + 1);
    return classNumber;
  }

  const tagLinkHTML = '<li>' + calculateTagClass(tagsPaper[tag], tagsParam) + '</li>';
  console.log('tagLinkHTML:', tagLinkHTML);

  tagsPaperHTML += tagLinkHTML;

let tagsPaperHTML = '';

for(let tag in tagsPaper){
  tagsPaperHTML += tag + ' (' + tagsPaper[tag] + ') ';
}

tagList.innerHTML = tagsPaperHTML;


const allTagsData = {tags: []};
allTagsData.tags.push({
  tag: tag,
  count: allTags[tag],
  className: calculateTagClass(allTags[tag], tagsParams)
});
tagList.innerHTML = templates.tagCloudLink(allTagsData)
console.log(allTagsData)
