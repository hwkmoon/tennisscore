export const playPause = () => {
  // la propriété type permet d'identifier l'action
  type: "playPause";
};

export const pointScored = (player) => ({
  type: "pointScored",
  payload: { player: player }
});
