import { useEffect, useState } from "react";

const App = () => {
  const [trackText, setTrackText] = useState("");
  const [countdown, setCountdown] = useState(5);

  const handleTextTracking = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTrackText(e.target.value);
  };

  useEffect(() => {
    if (countdown > 0) {
      const timeout = setTimeout(() => {
        setCountdown((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [countdown]);

  const countWord = (text: string): number => {
    return text
      .trim()
      .split(" ")
      .filter((word) => word !== "").length;
  };

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleTextTracking} />
      <h4>Time reminaing: {countdown}</h4>
      <button>Start</button>
      <h1>Word count: ???</h1>
    </div>
  );
};

export default App;
