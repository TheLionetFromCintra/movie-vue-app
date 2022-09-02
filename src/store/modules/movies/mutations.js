export default {
  loadMainSliderItems(state, payload) {
    state.mainSlider = payload;
  },
  setCurrentState(state, payload) {
    state.currentState = payload;
  },
  isMainSliderLoaded(state, payload) {
    state.isMainSliderLoaded = payload;
  },
};
