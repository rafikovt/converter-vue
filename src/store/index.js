import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
    filterValue: "",
    onLoading: false,
    onError: false,
  },
  mutations: {
    updateData(state, data) {
      state.data = Object.values(data.Valute);
    },
  },
  actions: {
    loadData(context) {
      this.state.onLoading = true;
      this.state.onError = false;
      fetch("https://www.cbr-xml-daily.ru/daily_json.js")
        .then((response) => response.json())
        .then((data) => {
          context.commit("updateData", data);
          this.state.onLoading = false;
        })
        .catch(() => {
          this.state.onLoading = false;
          this.state.onError = true;
        });
    },
  },
});
