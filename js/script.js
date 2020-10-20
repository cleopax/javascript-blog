document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
});

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

function generateTitleLinks(){

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


generateTitleLinks();


  function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

titleList.innerHTML = html;
    const links = document.querySelectorAll('.titles a');
    console.log('link: ', links);
    for (const link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  }
  generateTitleLinks();

  const articleTitle = article.querySelector(optTitleSelector).innerHTML;

  const linkHTML = '<li><a href="#"><span></span></a></li>';

  const linkHTML = '<li><a href="#' + '"><span>' + '</span></a></li>';

  const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

  console.log()

  titleList.innerHTML = titleList.innerHTML + linkHTML;




