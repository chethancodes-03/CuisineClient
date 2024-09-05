/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import './DietPlan.css';

const DietPlan = () => {
    const [dishName, setDishName] = useState('');
    const [nutritionalInfo, setNutritionalInfo] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3001/generate-nutritional-info', { dishName });
            setNutritionalInfo(response.data.nutritionalInfo);
            setError('');
        } catch (err) {
            console.error('Error fetching nutritional information:', err);
            setError('Error generating nutritional information. Please try again.');
            setNutritionalInfo('');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="diet-plan-container">
            <h1>Diet Plan</h1>
            <div className="form-group">
                <label htmlFor="dishName">Dish Name</label>
                <input
                    type="text"
                    id="dishName"
                    value={dishName}
                    onChange={(e) => setDishName(e.target.value)}
                />
            </div>
            <button onClick={handleGenerate} disabled={loading}>
                {loading ? 'Fetching...' : 'Get Nutrition Info'}
            </button>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="nutrition-output">
                {nutritionalInfo && <pre>{nutritionalInfo}</pre>}
            </div>
        </div>
    );
};

export default DietPlan;
