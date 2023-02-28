import { useState } from "react";

const App = () => {
  const [trackText, setTrackText] = useState("");

  const handleTextTracking = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTrackText(e.target.value);
    console.log(trackText);
  };

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleTextTracking} />
      <h4>Time reminaing: ???</h4>
      <button>Start</button>
      <h1>Word count: ???</h1>
    </div>
  );
};

export default App;
