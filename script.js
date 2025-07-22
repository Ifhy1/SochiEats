const meals = [
  {
    day: "Monday",
    breakfast: "Oats with groundnut & banana smoothie",
    lunch: "Efo riro with brown rice & grilled chicken",
    dinner: "Beans & plantain (small portion), 2 boiled eggs",
    snack: "Groundnuts, boiled corn",
    water: "3–4L throughout the day"
  },
  {
    day: "Tuesday",
    breakfast: "Egg white omelette, avocado, 1 slice whole wheat bread",
    lunch: "Ofada rice with ayamase (light oil), grilled tilapia",
    dinner: "Moi moi & vegetable salad, 1 boiled egg",
    snack: "Tiger nuts, cucumbers",
    water: "Sip water every 30 mins during workouts"
  },
  {
    day: "Wednesday",
    breakfast: "Pap (akamu) with moi moi or boiled egg",
    lunch: "Jollof rice with steamed veggies & beef (lean cut)",
    dinner: "Sweet potatoes & beans, avocado slices",
    snack: "Fruit salad (pawpaw, watermelon, banana)",
    water: "Minimum 3L, hydrate post-meals"
  },
  {
    day: "Thursday",
    breakfast: "Greek yogurt with honey & granola, banana",
    lunch: "Amala with ewedu & grilled turkey (light stew)",
    dinner: "Boiled yam & egg sauce with tomatoes",
    snack: "Cashew nuts, apple",
    water: "Drink 1 cup before & after each meal"
  },
  {
    day: "Friday",
    breakfast: "Plantain pancake & 2 boiled eggs",
    lunch: "Fried rice with grilled chicken & veggie stir-fry",
    dinner: "Okra soup with wheat swallow & tilapia",
    snack: "Boiled corn, coconut chunks",
    water: "Keep sipping during workout & meals"
  },
  {
    day: "Saturday",
    breakfast: "Smoothie (banana, tigernut, oats, date), 1 boiled egg",
    lunch: "Egusi soup with semo & grilled beef (moderate oil)",
    dinner: "Spaghetti with boiled egg & mixed veggies",
    snack: "Groundnut cake (kulikuli), watermelon",
    water: "3–4L minimum with short breaks"
  },
  {
    day: "Sunday",
    breakfast: "Akara with pap (low sugar), 2 boiled eggs",
    lunch: "Rice and stew with grilled chicken & steamed ugu",
    dinner: "Yam porridge with ugu, 1 boiled egg",
    snack: "Tiger nuts, pawpaw",
    water: "Hydrate early, rest, then sip till night"
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