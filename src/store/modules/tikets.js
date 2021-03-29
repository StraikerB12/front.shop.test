export default {
  state: {
    messages: 0
  },
  getters: {},
  mutations: {
    setMessages(state, payload){
      state.messages = payload;
    }
  },

  actions: {

    getNewMessages: async ({state, dispatch, commit}) => {
      const {count} = await dispatch('requestApi', {url: 'front/tikets.getNew', data: {}});
      commit('setMessages', count ? count : 0);
    },

  }
}