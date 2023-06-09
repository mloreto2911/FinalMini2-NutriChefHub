/** @format */

// hamburger
const navBar = document.querySelector(".navbar");
const faBars = document.querySelector("#fa-bars");

faBars.addEventListener("click", (e) => {
  faBars.classList.toggle("fa-times");
  navBar.classList.toggle("active1");
});




// dark mode
const darkMode = document.querySelector("#dark-mode");

darkMode.addEventListener("click", () => {
  if (darkMode.classList.contains("fa-moon")) {
    darkMode.classList.remove("fa-moon");
    darkMode.classList.add("fa-sun");
    themeSwitch();
    
  } else {
    darkMode.classList.remove("fa-sun");
    darkMode.classList.add("fa-moon");
    themeSwitch();
    
  }
});

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    darkMode.classList.add("fa-sun");
    darkMode.classList.remove("fa-moon");
    
  } else {
    darkMode.classList.add("fa-moon");
    darkMode.classList.remove("fa-sun");
    
  }
};

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
};



themeCheck();




    




  






