"use client";

import { useEffect, useState } from 'react';

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        if (response.ok) {
            const data = await response.json();
            return data.meals.map(meal => ({
                id: meal.idMeal,
                name: meal.strMeal,
                image: meal.strMealThumb
            }));
        } else {
            console.error('Failed to fetch meal ideas');
            return [];
        }
    } catch (error) {
        console.error('Error fetching meal ideas:', error);
        return [];
    }
}

function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function fetchMealIdeas() {
            try {
                const response = await fetch(`API_ENDPOINT_HERE?ingredient=${ingredient}`);
                if (response.ok) {
                    const data = await response.json();
                    setMeals(data);
                } else {
                    console.error('Failed to fetch meal ideas');
                }
            } catch (error) {
                console.error('Error fetching meal ideas:', error);
            }
        }
        fetchMealIdeas();

        return () => {
        };
    }, [ingredient]);

    return (
        <div>
            <h2>Meal Ideas for {ingredient}</h2>
            <ul>
                {}
                {meals.map((meal, index) => (
                    <li key={index}>{meal}</li>
                ))}
            </ul>
        </div>
    );
}

export default MealIdeas;
