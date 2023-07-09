import React from "react";
import { range } from "../../../src/utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../../src/constants";
import Guess from "../Guess/Guess";


function GuessResults({ guesses }) {
  return (
    <div className="guess-results">

      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={index} value={guesses[index]}/>
      ))}
    </div>
  );
}

export default GuessResults;
