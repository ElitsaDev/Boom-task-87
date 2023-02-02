import "../scss/app.scss";
import * as R from 'ramda';

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const arrayToPluck = [
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ];
  
  let getClassNames = R.pluck('class');
  let names = getClassNames(arrayToPluck);
  console.log(names);

  const articles = document.querySelectorAll("article");
  let i = 0;
  articles.forEach(article => {
    article.classList.add(names[i++]);
  });
  
});
