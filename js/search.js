// search
const searchForm = document.querySelector("#search-form")
const close = document.querySelector("#close")
const searchIcon = document.querySelector("#search-icon")

searchIcon.addEventListener("click",(e)=>{
  searchForm.classList.toggle("active2")
})
close.addEventListener("click",(e)=>{
  searchForm.classList.toggle("active2")
})