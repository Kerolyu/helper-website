const faqButtons = document.querySelectorAll(".faq-item__button");
const faqQuestions = document.querySelectorAll(".faq-item__question");
const answers = document.querySelectorAll(".faq-item__answer");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const plusLine = question.querySelector(".ver-line");
    plusLine.classList.toggle("active");
    const answer = question.closest(".faq-item").querySelector(".faq-item__answer");
    answer.classList.toggle("visible");
    question.closest(".faq-item").classList.toggle("faq-bg");
  });
});
