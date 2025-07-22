const meals = [
  {
      day: "Monday",
      breakfast: "Rice & stew with proteins of your choice",
      lunch: "Optional: Golden morn with milk (low sugar)",
      dinner: "Boiled plantain with peppered turkey, boiled eggs & steamed veggies",
      snack: "Boiled groundnuts, coconut chips",
      water: "3–4L, start with a big cup in the morning"
    },
    {
      day: "Tuesday",
      breakfast: "Yam and egg sauce with onions & tomatoes",
      lunch: "Optional: Greek yogurt with granola",
      dinner: "Eba with okra soup (loaded with fish and ponmo)",
      snack: "Tiger nuts, garden eggs with peanut butter",
      water: "Hydrate before and after each workout set"
    },
    {
      day: "Wednesday",
      breakfast: "Akara with pap (low sugar), 2 boiled eggs",
      lunch: "Jollof rice with moi moi and grilled chicken breast",
      dinner: "Semo with ogbono soup & assorted meat (lean cuts)",
      snack: "Fruit salad with pawpaw, banana, cucumber",
      water: "3L minimum, sip slowly after meals"
    },
    {
      day: "Thursday",
      breakfast: "Beans porridge with plantain with turkey or boiled eggs",
      lunch: "Optional: Smoothie with spinach, banana, and protein powder",
      dinner: "Boiled yam & egg stew with vegetables",
      snack: "Roasted corn with coconut, carrot",
      water: "Drink 1 cup every hour consistently"
    },
    {
      day: "Friday",
      breakfast: "Boiled potatoes with egg sauce and vegetables",
      lunch: "Optional: Golden morn )",
      dinner: "Goat meat peppersoup or Nkwobi or Isi Ewu with ugba",
      snack: "Cashew nuts, apple slices",
      water: "Keep sipping throughout the day"
    },
    {
      day: "Saturday",
      breakfast: "Pap with akara and 2 boiled eggs",
      lunch: "Yam porridge with ugu & dried fish",
      dinner: "Spaghetti jollof with beef stir-fry and carrots",
      snack: "Boiled groundnuts, cucumber sticks",
      water: "3–4L total, especially post-exercise"
    },
    {
      day: "Sunday",
      breakfast: "Bread and egg sandwich with tea (no sugar)",
      lunch: "Rice and stew with fried plantain, Salad & steamed ugu",
      dinner: "Okra soup with amala & grilled turkey",
      snack: "Tiger nuts, pawpaw slices",
      water: "Start with 2 glasses before noon, then sip"
    }
  ];
  

const container = document.getElementById("meal-plan-container");

meals.forEach((meal) => {
  const card = document.createElement("div");
  card.className = "day-card";
  card.innerHTML = `
    <h2> ${meal.day}</h2>
    <div class="meal-buttons">
      <button onclick="showMeal(this, '${meal.breakfast}')">Breakfast</button>
      <button onclick="showMeal(this, '${meal.lunch}')">Lunch</button>
      <button onclick="showMeal(this, '${meal.dinner}')">Dinner</button>
      <button onclick="showMeal(this, '${meal.snack}')">Snack</button>
      <button onclick="showMeal(this, '${meal.water}')">Water</button>
    </div>
  `;
  container.appendChild(card);
});

function showMeal(button, text) {
  
  const existing = button.parentElement.nextElementSibling;
  if (existing && existing.classList.contains("meal-detail")) {
    existing.remove();
  }

  const detail = document.createElement("div");
  detail.className = "meal-detail";
  detail.textContent = text;
  button.parentElement.parentElement.appendChild(detail);
}

document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});