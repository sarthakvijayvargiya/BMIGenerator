const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const heightValue = parseInt(document.querySelector("#height").value);
  const weightValue = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (heightValue === "" || heightValue < 0 || isNaN(heightValue)) {
    result.innerHTML = "Enter a Valid Height";
  } else if (weightValue === "" || weightValue < 0 || isNaN(weightValue)) {
    result.innerHTML = "Enter a Valid Weight";
  } else {
    const bmi = (weightValue / ((heightValue * heightValue) / 10000)).toFixed(
      2
    );
    if (bmi < 18.6) {
      result.innerHTML = `<div><span>${bmi}</span><br/><span>Please gain weight you are under weight</span></div>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = `<div><span>${bmi}</span><br/><span>Good Keep It UP</span></div>`;
    } else {
      result.innerHTML = `<div><span>${bmi}</span><br/><span>You Are over weight , Exercise to reduce it</span></div>`;
    }
  }
});
