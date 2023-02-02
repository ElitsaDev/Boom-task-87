import "../scss/app.scss";
import {pluck} from 'ramda';

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const arrayToPluck = [
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ];
  
  let classNames = arrayToPluck.pluck('class');
  console.log(classNames);

  const articles = document.querySelectorAll("article");
  
});
