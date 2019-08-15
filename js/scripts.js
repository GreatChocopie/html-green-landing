var faq = document.querySelector(".faq");
var faqButtonOpen = faq.querySelector(".faq__item-icon--opened");
var faqAnswer = faq.querySelector(".faq__item-answer");
var faqButtonClose = faq.querySelector(".faq__item-icon--closed");

faqButtonOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  faqAnswer.classList.add("faq__item-answer--show");
  faqButtonClose.classList.add("faq__item-answer--show");
  faqButtonOpen.classList.add("faq__item-icon--closed");

});
faqButtonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  faqAnswer.classList.remove("faq__item-answer--show");
  faqButtonClose.classList.remove("faq__item-answer--show");
  faqButtonOpen.classList.remove("faq__item-icon--closed");

});
