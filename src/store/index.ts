import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export interface Photo {
  id: string;
  createdAt: string;
  updatedAt: string;
  revisedAt: string;
  title: string;
  description: string;
  image: Image;
  displayOrder: number;
}
export interface Image {
  url: string;
  height: number;
  width: number;
}

export default new Vuex.Store({
  state: {
    photos: [] as Photo[],
  },
  mutations: {
    increment(state, photos) {
      state.photos = photos;
    },
  },
  actions: {
    async getPhotos(context) {
      const res = await axios.get(
        "https://ispec-test.microcms.io/api/v1/photo",
        {
          headers: { "x-api-key": "b279aadc-834e-4977-80e2-e7ba2c825bb7" },
        }
      );
      context.commit("increment", res.data.contents);
    },
  },
  modules: {},
});
