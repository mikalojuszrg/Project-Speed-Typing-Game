import { useEffect, useRef, useState } from "react";

const useWordGame = () => {
  const [trackText, setTrackText] = useState("");
  const [countdown, setCountdown] = useState(5);
  const [startTimer, setStartTimer] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const textBoxRef = useRef<HTMLTextAreaElement>(null);

  const STARTING_TIME = 5;

  const handleTextTracking = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTrackText(e.target.value);
  };

  const startGame = () => {
    setStartTimer((prevValue) => !prevValue);
    setCountdown(STARTING_TIME);
    setTrackText("");
    setWordCount(0);
    setIsDisabled(true);
    textBoxRef.current && (textBoxRef.current.disabled = false);
    textBoxRef.current && textBoxRef.current.focus();
  };

  const endGame = () => {
    setStartTimer(false);
    setWordCount(countWord(trackText));
    setIsDisabled(false);
  };

  useEffect(() => {
    if (countdown > 0 && startTimer) {
      setTimeout(() => {
        setCountdown((prevTime) => prevTime - 1);
      }, 1000);
    } else if (countdown === 0) {
      endGame();
    }
  }, [countdown, startTimer]);

  const countWord = (text: string): number => {
    return text
      .trim()
      .split(" ")
      .filter((word) => word !== "").length;
  };
  return {
    isDisabled,
    trackText,
    handleTextTracking,
    textBoxRef,
    countdown,
    startGame,
    wordCount,
  };
};

export default useWordGame;
