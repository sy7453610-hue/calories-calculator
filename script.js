let totalCalories = 0;
let totalProtein = 0;

// Simple food database (per 100g)
const foodData = {
  "rice": { calories: 130, protein: 2.7 },
  "roti": { calories: 120, protein: 3 },
  "milk": { calories: 42, protein: 3.4 },
  "egg": { calories: 155, protein: 13 },
  "chicken": { calories: 239, protein: 27 },
  "banana": { calories: 89, protein: 1.1 },
  "apple": { calories: 52, protein: 0.3 }
};

function addFood() {
  const foodName = document.getElementById("foodName").value.toLowerCase();
  const quantity = document.getElementById("quantity").value;

  if (!foodData[foodName]) {
    alert("Food not found in database!");
    return;
  }

  const calories = (foodData[foodName].calories * quantity) / 100;
  const protein = (foodData[foodName].protein * quantity) / 100;

  totalCalories += calories;
  totalProtein += protein;

  document.getElementById("totalCalories").innerText = totalCalories.toFixed(2);
  document.getElementById("totalProtein").innerText = totalProtein.toFixed(2);

  const table = document.getElementById("foodList");

  const row = `
    <tr>
      <td>${foodName}</td>
      <td>${quantity}</td>
      <td>${calories.toFixed(2)}</td>
      <td>${protein.toFixed(2)}</td>
    </tr>
  `;

  table.innerHTML += row;

  document.getElementById("foodName").value = "";
  document.getElementById("quantity").value = "";
}