import React from "react";


function GuessInput({handleSubmit,gameStatus}) {
  const [newGuess, setNewGuess] = React.useState("");


  function handleSubmitGuess(e){
    e.preventDefault()
    handleSubmit(newGuess);
    setNewGuess("");
  }
  
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        disabled={gameStatus !== 'running'}
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}"
        title="Please enter 5 alphabet characters"
        value={newGuess}
        onChange={(e) => {
          if (newGuess.length >= 5) return;
          setNewGuess(e.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
