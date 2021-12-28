export function Buttons(props) {
  const point1Handler = () => {
    if (props.playing === true) {
      if (props.score.player1 === 0)
        props.setScore({ ...props.score, player1: 15 });
      if (props.score.player1 === 15)
        props.setScore({ ...props.score, player1: 30 });
      if (props.score.player1 === 30)
        props.setScore({ ...props.score, player1: 40 });
      if (
        props.score.player1 === 40 &&
        props.score.advantage1 === false &&
        props.score.player2 === 40 &&
        props.score.advantage2 === false
      )
        props.setScore({ ...props.score, advantage1: true });
      if (
        props.score.player1 === 40 &&
        props.score.advantage1 === false &&
        props.score.player2 === 40 &&
        props.score.advantage2 === true
      )
        props.setScore({ ...props.score, advantage2: false });
      if (
        (props.score.player1 === 40 && props.score.player2 < 40) ||
        props.score.advantage1 === true
      )
        props.setScore({ ...props.score, player1: 60, advantage1: false });
    }
  };
  const point2Handler = () => {
    if (props.playing === true) {
      if (props.score.player2 === 0)
        props.setScore({ ...props.score, player2: 15 });
      if (props.score.player2 === 15)
        props.setScore({ ...props.score, player2: 30 });
      if (props.score.player2 === 30)
        props.setScore({ ...props.score, player2: 40 });
      if (
        props.score.player2 === 40 &&
        props.score.advantage2 === false &&
        props.score.player1 === 40 &&
        props.score.advantage1 === false
      )
        props.setScore({ ...props.score, advantage2: true });
      if (
        props.score.player2 === 40 &&
        props.score.advantage2 === false &&
        props.score.player1 === 40 &&
        props.score.advantage1 === true
      )
        props.setScore({ ...props.score, advantage1: false });
      if (
        (props.score.player2 === 40 && props.score.player1 < 40) ||
        props.score.advantage2 === true
      )
        props.setScore({ ...props.score, player2: 60, advantage2: false });
    }
  };

  const reset = () => {
    if (props.playing === true) {
      props.setScore({
        player1: 0,
        player2: 0,
        advantage1: false,
        advantage2: false
      });
    }
  };

  const pausePlay = () => {
    props.setPlaying(!props.playing);
  };

  return (
    <div class="buttons">
      <div class="buttons-row">
        <button class="button" id="player-1" onClick={point1Handler}>
          Point Joueur 1
        </button>
        <button class="button" id="player-2" onClick={point2Handler}>
          Point Joueur 2
        </button>
      </div>
      <div class="buttons-row">
        <button class="button" id="reset" onClick={reset}>
          Remettre à zéro
        </button>
        <button class="button" id="pause" onClick={pausePlay}>
          Pause / Reprendre
        </button>
      </div>
    </div>
  );
}
