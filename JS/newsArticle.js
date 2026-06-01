var xhr = new XMLHttpRequest();
var url = "../JSON/newsArticle.json";

xhr.open("GET", url, true);
xhr.responseType = "json";

xhr.onload = function () {
  var articles = xhr.response.articles;
  var articlesDiv = document.getElementById("articles");

  articles.forEach(function (article) {
    var articleDiv = document.createElement("div");
    articleDiv.classList.add("article");

    var title = document.createElement("h2");
    title.textContent = article.title;
    articleDiv.appendChild(title);

    var description = document.createElement("p");
    description.textContent = article.description;
    articleDiv.appendChild(description);

    var waysToAchieve = document.createElement("ul");
    article.ways_to_achieve.forEach(function (way) {
      var li = document.createElement("li");
      li.textContent = way;
      waysToAchieve.appendChild(li);
    });
    articleDiv.appendChild(waysToAchieve);

    var benefits = document.createElement("ul");
    article.benefits.forEach(function (benefit) {
      var li = document.createElement("li");
      li.textContent = benefit;
      benefits.appendChild(li);
    });
    articleDiv.appendChild(benefits);
    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysToAchieve);
    articleDiv.appendChild(benefits);
    articlesDiv.appendChild(articleDiv);
  });
};

xhr.send();
