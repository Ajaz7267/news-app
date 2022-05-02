// Ude Import export (MANDATORY)

import navbar from "/components/navbar.js"
document.body.innerHTML = navbar();

const url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=`;
fetch(url)

// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
