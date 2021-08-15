import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      firstName : "Mario",
      lastName : "Rossi",
      urlImage : "images/profile.png"
    },
    sections: [
      {
        name: "Home",
        icon: "home"
      },
      {
        name: "Maps",
        icon: "map"
      },
      {
        name : "Config",
        icon : "settings"
      },
      {
        name : "Contacts",
        icon : "mail"
      }
    ]
  },
  mutations: {},
  actions: {

  },
  modules: {},
  getters:{

    getFirstName(state){
      return state.user.firstName;
    },

    getLastName(state){
      return state.user.lastName;
    },

    getUrlImage(state){
      return state.user.urlImage;
    },

    getSections(state){
      return state.sections;
    }
  }
});
