document.addEventListener("DOMContentLoaded", function () {
  const centimetersInput = document.getElementById("centimeters");
  const resultElement = document.getElementById("result");
  const ageElement = document.getElementById("age");

  const recalculate = () => {
    const centimetersValue = parseFloat(centimetersInput.value);
    const age = parseInt(ageElement.value);

    if (!centimetersValue || !age) {
      resultElement.style.display = "none";
      return;
    }

    resultElement.style.display = "block";
    resultElement.innerHTML = "";

    const table = document.createElement("table");
    table.classList.add("table");

    const thead = document.createElement("thead");
    const headerRow = thead.insertRow();
    const headers = ["Weight (kg)", "Male BMR (kcal)", "Female BMR (kcal)"];
    headers.forEach((text) => {
      const th = document.createElement("th");
      th.textContent = text;
      headerRow.appendChild(th);
    });
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    for (let weight = 40; weight <= 200; weight++) {
      const row = tbody.insertRow();
      const weightCell = row.insertCell();
      const maleCell = row.insertCell();
      const femaleCell = row.insertCell();

      const maleBMR = (10 * weight) + (6.25 * centimetersValue) - (5 * age) + 5;
      const femaleBMR = (10 * weight) + (6.25 * centimetersValue) - (5 * age) - 161;

      weightCell.textContent = weight;
      maleCell.textContent = maleBMR.toFixed(2);
      femaleCell.textContent = femaleBMR.toFixed(2);
    }
    table.appendChild(tbody);

    resultElement.appendChild(table);
  };

  centimetersInput.addEventListener("input", recalculate);
  ageElement.addEventListener("input", recalculate);
});
