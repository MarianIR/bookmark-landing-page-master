const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const mainHeader = document.querySelector(".main-header");
const pageLogo = document.querySelector(".page-logo");
const theNav = document.querySelector(".navigation");
const navList = document.querySelector(".nav-list");
const navElement = document.querySelectorAll(".nav-element");
const navLink = document.querySelectorAll(".nav-link");
const socialMedia = document.querySelector(".social-media");
//////////////////////////////////////////
//////////////////////////////////////////
const simpleBookmarkingBtn = document.querySelector(".simple-bookmarking-btn");
const speedySearchingBtn = document.querySelector(".speedy-searching-btn");
const easySharingBtn = document.querySelector(".easy-sharing-btn");
//////////////////////////////////////////
//////////////////////////////////////////
const simpleBookmarking = document.querySelector(".simple-bookmarking-section");
const speedySearching = document.querySelector(".speedy-searching-section");
const easySharing = document.querySelector(".easy-sharing-section");
//////////////////////////////////////////
//////////////////////////////////////////

//////////////////////////////////////////
//////////////////////////////////////////

openMenu.addEventListener("click", (e) => {
  e.preventDefault();
  mainHeader.classList.add("active");
  closeMenu.style.display = "block";
  openMenu.style.display = "none";
  pageLogo.classList.add("active");
  theNav.classList.add("active");
  navList.classList.add("active");
  navElement.forEach((element) => {
    element.classList.add("active");
  });
  navLink.forEach((link) => {
    link.classList.add("active");
  });
  socialMedia.style.display = "flex";
});

closeMenu.addEventListener("click", (e) => {
  e.preventDefault();
  mainHeader.classList.remove("active");
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
  pageLogo.classList.remove("active");
  theNav.classList.remove("active");
  navList.classList.remove("active");
  navElement.forEach((element) => {
    element.classList.remove("active");
  });
  navLink.forEach((link) => {
    link.classList.remove("active");
  });
  socialMedia.style.display = "none";
});
//////////////
speedySearchingBtn.addEventListener("click", (e) => {
  e.preventDefault();
  speedySearchingBtn.classList.add("active-btn");
  easySharingBtn.classList.remove("active-btn");
  simpleBookmarkingBtn.classList.remove("active-btn");
  simpleBookmarking.style.display = "none";
  speedySearching.classList.add("active-section");
  easySharing.classList.remove("active-section");
});
/////////////////
easySharingBtn.addEventListener("click", (e) => {
  e.preventDefault();
  easySharingBtn.classList.add("active-btn");
  speedySearchingBtn.classList.remove("active-btn");
  simpleBookmarkingBtn.classList.remove("active-btn");
  easySharing.classList.add("active-section");
  speedySearching.classList.remove("active-section");
  simpleBookmarking.style.display = "none";
});
/////////////////
simpleBookmarkingBtn.addEventListener("click", (e) => {
  e.preventDefault();
  simpleBookmarkingBtn.classList.add("active-btn");
  easySharingBtn.classList.remove("active-btn");
  speedySearchingBtn.classList.remove("active-btn");
  simpleBookmarking.style.display = "flex";
  speedySearching.classList.remove("active-section");
  easySharing.classList.remove("active-section");
});
/////////////////
const question = document.querySelectorAll(".question");
const arrow = document.querySelector(".arrow");
const answer = document.querySelector(".answer");
/////////////////
const questions = document.querySelectorAll(".qa-container");

questions.forEach((question) => {
  const button = question.querySelector(".question");
  const questionText = question.querySelector(".answer");
  button.addEventListener("click", () => {
    if ((questionText.style.display = "none")) {
      questionText.style.display = "block";
    } else if ((questionText.style.display = "block")) {
      questionText.style.display = "none";
    }

    question.classList.toggle("show-text");
  });

  questionText.addEventListener("click", () => {
    questions.forEach((item) => {
      if ((questionText.style.display = "block")) {
        questionText.style.display = "none";
      }
    });
    question.classList.toggle("show-text");
  });
});
