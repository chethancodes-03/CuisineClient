/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import './Recipe.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Recipe() {
    const [ingredients, setIngredients] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [recipeTitle, setRecipeTitle] = useState('');
    const [formattedRecipe, setFormattedRecipe] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setIngredients(e.target.value);
    };

    const handleCuisineChange = (e) => {
        setCuisine(e.target.value);
    };

    const handleSearchRecipes = async () => {
        if (!ingredients.trim() || !cuisine.trim()) {
            setError('Please enter some ingredients and a cuisine.');
            return;
        }

        setError('');
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3001/generate-recipe', {
                ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
                cuisine
            });
            setRecipeTitle(response.data.recipeTitle);
            setFormattedRecipe(response.data.formattedRecipe);
        } catch (err) {
            console.error('Error fetching recipes:', err);
            setError('Error fetching recipes. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const formatRecipeText = (text) => {
        return text.replace(/[*]([^*]+)[*]/g, '<h3>$1</h3>').replace(/## ([^\n]+)/g, '<h2>$1</h2>').replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
    };

    return (
        <div className="recipe-container">
            <h2>Have something in the fridge? See what you can make!</h2>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter ingredients separated by commas"
                    value={ingredients}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter cuisine"
                    value={cuisine}
                    onChange={handleCuisineChange}
                />
                <button
                    className="btn btn-primary"
                    onClick={handleSearchRecipes}
                    disabled={loading}
                >
                    {loading ? 'Searching...' : 'Search Recipes'}
                </button>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="recipe-output">
                {recipeTitle && <h2>{recipeTitle}</h2>}
                {formattedRecipe && <div dangerouslySetInnerHTML={{ __html: formatRecipeText(formattedRecipe) }} />}
            </div>
        </div>
    );
}

export default Recipe;
