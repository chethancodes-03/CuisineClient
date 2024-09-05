import axios from 'axios';

const apiKey = 'ab5e0756949341a9b2db06814c1f3fd9';

export const fetchRecipes = (ingredients, cuisine) => {
    const params = {
        ingredients,
        number: 25,
        ignorePantry: true,
        apiKey: apiKey,
    };

    if (cuisine) {
        params.cuisine = cuisine;
    }

    return axios.get('https://api.spoonacular.com/recipes/findByIngredients', {
        params,
    });
};

export const fetchRecipeById = (recipeId) => axios.get(
    `https://api.spoonacular.com/recipes/${recipeId}/information`, {
        params: {
            includeNutrition: false,
            apiKey: apiKey,
        },
    },
);

export const fetchRecipeInstructions = (recipeId) => axios.get(
    `https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions`, {
        params: {
            apiKey: apiKey,
        },
    },
);
