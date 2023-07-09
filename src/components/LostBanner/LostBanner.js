import React from "react";
import Banner from "../Banner/Banner";

function LostBanner({answer, handleRestart}) {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}.</strong>
        {' '}
        <button className="button play-again" onClick={handleRestart}><strong>Play again?</strong></button>
      </p>
    </Banner>
  );
}

export default LostBanner;
