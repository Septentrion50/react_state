import React from 'react';
import DisplayMeal from 'components/DisplayMeal';

const Meal = () => {

    const [currentMeal, setCurrentMeal] = React.useState({});

    const proposeMeal = () => {
        const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
       
       fetch(url)
            .then((resp) => resp.json())
            .then(function(data) {
                setCurrentMeal(data.meals[0]);
            })
            .catch(function(error) {
                console.log("error: ", error);
            });
    };

    return (
        <div>
            <button onClick={proposeMeal}>Me proposer une recette</button>
            <DisplayMeal meal={currentMeal} />
        </div>
    );
};

export default Meal;