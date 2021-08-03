import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'components/Form';
import Meal from 'components/Meal';
import Hangman from 'components/Hangman';

const App = () => (
    <div>
        <h2>Exo 1</h2>
        <Form />
        <br/>
        <hr/>
        <h2>Exo 2</h2>
        <Meal />
        <br/>
        <hr/>
        <h2>Exo 3</h2>
        <Hangman />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));