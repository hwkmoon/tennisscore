import { createStore } from "react-redux";
import { reducer, initialState } from "./reducer";

const store = createStore(reducer, initialState);
store.subscribe(
  // cette fonction sera exécutée à chaque fois que le state change
  () => {
    const state = store.getState();
    updateScoreText(state.playing);
  }
);
