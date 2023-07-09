import React from "react";
import { range } from "../../../src/utils";

function Cell({ letter, status }) {
  return (
    <span key={Math.random()} className={`${status} cell`}>
      {letter}
    </span>
  );
}

function Guess({ value }) {
  return (
    <p key={Math.random()} className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={value ? value[num].letter : ""}
          status={value ? value[num].status : ""}
        />
      ))}
    </p>
  );
}

export default Guess;
