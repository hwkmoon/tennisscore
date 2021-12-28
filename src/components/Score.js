export function Score(props) {
  const updateScoreText = () => {
    if (props.playing === false) return "Pause";
    else if (props.score.player1 > 40 && props.score.advantage1 === false)
      return "Le joueur 1 a gagne";
    else if (props.score.player2 > 40 && props.score.advantage2 === false)
      return "Le joueur 2 a gagne";
    else
      return `Le score est: ${props.score.player1}${
        props.score.advantage1 ? "A" : ""
      } - ${props.score.player2}${props.score.advantage2 ? "A" : ""}`;
  };
  return (
    <p class="display" id="score">
      {updateScoreText()}
    </p>
  );
}
