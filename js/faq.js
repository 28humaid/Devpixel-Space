document.addEventListener("click", function (e) {
  const question = e.target.closest(".faq-question");

  if (!question) return;

  const item = question.closest(".faq-item");
  item.classList.toggle("active");
});
