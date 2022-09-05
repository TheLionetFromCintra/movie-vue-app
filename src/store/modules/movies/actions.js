import api from "../../../api.js";

export default {
  async loadMainSlider(context, payload) {
    context.commit("isMainSliderLoaded", true);
    context.commit("loadMainSliderItems", []);

    const res = await api
      .get(`/${context.rootState.movies.currentState}/${payload.typePlaying}`)
      .finally(() => {
        context.commit("isMainSliderLoaded", false);
      });
    const data = res.data.results;
    if (res.status !== 200) {
      throw new Error("Failed to fetch!");
    }
    context.commit("loadMainSliderItems", data);
  },
  setCurrentState(context, payload) {
    context.commit("setCurrentState", payload);
  },
};
