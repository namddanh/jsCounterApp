let count = 0;

const countAddBtn = document.getElementById("add");
const countMinusBtn = document.getElementById("subtract");
const countHeader = document.getElementById("count");

countHeader.innerText = count;

countAddBtn.addEventListener("click", () => {
  count++;
  countHeader.innerHTML = count;
});

countMinusBtn.addEventListener("click", () => {
  count--;
  countHeader.innerHTML = count;
});
