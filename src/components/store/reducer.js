export const initialState = {
  player1: 0,
  player2: 0,
  advantage: null,
  playing: true
};
// le reducer est une fonction
export function reducer(state = initialState, action) {
  // si l'action est de type playPause...
  if (action.type === "playPause") {
    // ... il faut inverser la propriété playing du state
    return {
      ...state,
      playing: !state.playing
    };
  }
  // sinon on retourne le state sans le changer
  return state;
}
