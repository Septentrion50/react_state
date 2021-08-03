import React from 'react';
import HideWord from 'components/HideWord';

const Hangman = () => {
    const [lives, setLives] = React.useState(6);
    const [word, setWord] = React.useState('');

    const chooseWord = () => {
        const url = "https://random-word-api.herokuapp.com/word?number=1"

        fetch(url)
            .then(response => response.json())
            .then(function(data){
               setWord(data[0]);
            })
    }

    console.log(word);
    return (
        <div>
            <h3>Hangman</h3>
            <p>Remaining lives: {lives}</p>
            <button onClick={chooseWord}>Start game</button>
            <HideWord word={word} />
        </div>
    )
};

export default Hangman;