import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessResults from "../GuessResults/GuessResults";

import GuessInput from "../GuessInput/GuessInput";
import { checkGuess } from "../../game-helpers";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";
import Keyboard from "../Keyboard/Keyboard";

// Pick a random word on every pageload.
const generatedAnswer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.


function Game() {
  const [answer, setAnswer] = React.useState(generatedAnswer);
  const [guesses, setGuesses] = React.useState([]);


  const [gameStatus, setGameStatus] = React.useState("running");

  function handleSubmit(tentativeGuess) {
    const checkGuessResult = checkGuess(tentativeGuess, answer);
    const nextGuesses = [...guesses, checkGuessResult];
    setGuesses(nextGuesses);


    if (tentativeGuess === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length > 5) {
      setGameStatus("lost");
    }
  }

  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus('running');
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleSubmit={handleSubmit} gameStatus={gameStatus} />
      {gameStatus === "won" && <WonBanner numOfGuess={guesses.length} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} handleRestart={handleRestart}/>}
      <Keyboard guesses={guesses}/>
    </>
  );
}

export default Game;
