import React from "react";

const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function getStatusByLetter(guesses) {
  const statusObj = {};

  guesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      statusObj[letter] = status;
    });
  });

  return statusObj;
}

function Keyboard({ guesses }) {
  const letterObj = getStatusByLetter(guesses);


  return (
    <>
      <div className="keyboard">
        {ROWS.map((row, index) => (
          <p className="row" key={index}>
            {row.map((letter) => (
              <span key={Math.random()} className={`key ${letterObj[letter] || ''}`}>
                {letter}
              </span>
            ))}
          </p>
        ))}
        ;
      </div>
    </>
  );
}

export default Keyboard;
