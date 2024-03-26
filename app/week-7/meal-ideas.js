"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://themealdb.com/api/json/v1/1/filter.php?i=${ingredient}
    `
    );
    const data = await response.json();
    return data.meals;
  } catch (error) {}
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas(ingredient) {
    const mealList = await fetchMealIdeas(ingredient);

    setMeals(mealList);

    console.log(ingredient);
  }

  useEffect(() => {
    if (!ingredient) return;

    loadMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <div className="flex items-center justify-center">
      <div className="items-center justify-center">
        <h2 className="font-bold mb-4">Meal Ideas:</h2>
        {meals.map((meal) => (
          <ol>
            <li key={meal.idMeal} name={meal.strMeal}>
              {meal.strMeal}
            </li>
          </ol>
        ))}
      </div>
    </div>
  );
}