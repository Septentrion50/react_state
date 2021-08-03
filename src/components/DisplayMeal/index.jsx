import React from 'react';

const DisplayMeal = ({meal}) => {
    if (meal.strMeal) {
        return (
            <div>
                <h2>{meal.strMeal}</h2>
                <img src={meal.strMealThumb} alt={meal.srtMeal} />
                <a href={meal.strSource}><p>Accéder à la recette</p></a>
            </div>
        );
    };
    return null;
};

export default DisplayMeal;