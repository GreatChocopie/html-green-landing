var faq = document.querySelector(".faq");
var faqButtonOpen = faq.querySelector(".faq__item-icon--opened");
var faqAnswer = faq.querySelector(".faq__item-answer");
var faqButtonClose = faq.querySelector(".faq__item-icon--closed");

var update = document.querySelector(".update");
var updateButtonLeft = document.querySelector(".update__slides-list-left--js");
var updateButtonRight = document.querySelector(".update__slides-list-right--js");
var updateSliderList1 = document.querySelector(".update__slides-list1");
var updateSliderList2 = document.querySelector(".update__slides-list2");

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


updateButtonRight.addEventListener("click", function (evt) {
  evt.preventDefault();
  updateSliderList2.classList.remove("update__slides-list-none");
  updateSliderList1.classList.add("update__slides-list-none");
});
updateButtonLeft.addEventListener("click", function (evt) {
  evt.preventDefault();
  updateSliderList1.classList.remove("update__slides-list-none");
  updateSliderList2.classList.add("update__slides-list-none");
});