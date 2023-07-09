import React from "react";
import Banner from "../Banner/Banner";

function WonBanner({numOfGuess}) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {numOfGuess > 1 ? `${numOfGuess} guesses` : "1 guess"}</strong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;
