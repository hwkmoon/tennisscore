import "./styles.css";
import { useState } from "react";
import { Score } from "./components/Score";
import { Buttons } from "./components/Buttons";

export default function App() {
  const [score, setScore] = useState({
    player1: 0,
    player2: 0,
    advantage1: false,
    advantage2: false
  });
  const [playing, setPlaying] = useState(true);

  return (
    <div className="App">
      <h1>Tennis Score</h1>
      <Score score={score} playing={playing} />
      <Buttons
        score={score}
        setScore={setScore}
        playing={playing}
        setPlaying={setPlaying}
      />
    </div>
  );
}
