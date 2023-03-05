import useWordGame from "./hooks/useWordGame";

const App = () => {
  const {
    isDisabled,
    trackText,
    handleTextTracking,
    textBoxRef,
    countdown,
    startGame,
    wordCount,
  } = useWordGame();

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        disabled={!isDisabled}
        value={trackText}
        onChange={handleTextTracking}
        ref={textBoxRef}
      />
      <h4>Time remaining: {countdown}</h4>
      <button disabled={isDisabled} onClick={startGame}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
};

export default App;
