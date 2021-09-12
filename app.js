const form = document.forms[0];
const result = document.querySelector(".result");
const e1 = form.e1;
const n1 = form.n1;
const e2 = form.e2;
const n2 = form.n2;
const de = document.querySelector(".de");
const dn = document.querySelector(".dn");
const distance = document.querySelector(".distance");
const angle = document.querySelector(".angle");
const reset = document.querySelector(".reset");

const onSubmit = (e) => {
  e.preventDefault();
  const changeInE = e1.value - e2.value;
  const changeInN = n1.value - n2.value;
  de.textContent = changeInE;
  dn.textContent = changeInN;
  const distanceValue = Math.sqrt(changeInE ** 2 - changeInN ** 2);
  const angleValue = Math.atan(changeInE / changeInN);
  console.log(angleValue);
  distance.textContent = distanceValue;
  angle.textContent = angleValue;
  result.classList.add("show");
  setTimeout(() => {
    result.classList.add("opac");
    reset.classList.add("showreset");
  }, 300);
};
form.addEventListener("submit", onSubmit);
document.querySelector(".fa-redo").addEventListener("click", () => {
  form.reset();
  result.classList.remove("opac");
  setTimeout(() => {
    result.classList.remove("show");
  }, 500);
});
