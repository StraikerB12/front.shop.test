export default {
  state: {
    token: '123',
    tokenRefresh: '',
    status: '',
    name: ''
  },
  getters: {
      
  },
  mutations: {
    setToken(state, payload){
      state.token = payload;
    },
    setTokenRefresh(state, payload){
      state.tokenRefresh = payload;
    },
    setStatus(state, payload){
        state.status = payload;
    },
    setName(state, payload){
        state.name = payload;
    }
  },

  actions: {
    userRegistr: ({commit, dispatch}, user) => {
      return new Promise((resolve) => {
        dispatch('requestApi', {url: 'oauth/registr', data: user})
        .then(({bearer_token, refresh_token, right, name}) => {
          commit('setToken', bearer_token);
          commit('setTokenRefresh', refresh_token);
          commit('setStatus', right);
          commit('setName', name);
          resolve();
        }).catch((error) => {
          console.log(error);
        })
      });
    },

    userLogin: ({commit, dispatch}, user) => {
      return new Promise((resolve) => {
        dispatch('requestApi', {url: 'oauth/login', data: user})
        .then(({bearer_token, refresh_token, right, name}) => {
          commit('setToken', bearer_token);
          commit('setTokenRefresh', refresh_token);
          commit('setStatus', right);
          commit('setName', name);
          resolve();
        }).catch((error) => {
          console.log(error);
        })
      });
    },

    userLogout: ({commit, dispatch}) => {
      return new Promise((resolve) => {
          dispatch('requestApi', {url: 'oauth/exits', data: {}})
          .then(() => {
            commit('setToken', '');
            commit('setTokenRefresh', '');
            commit('setStatus', '');
            commit('setName', '');
            resolve();
          }).catch((error) => {
            console.log(error);
          })
      });
    },

    resetToken: async ({state, dispatch, commit}) => {
      console.log('Использование resetToken');
      if(state.tokenRefresh != ''){
        try{
          const response = await dispatch('requestApi', {url: 'oauth/token', data: {token: state.tokenRefresh}});
          commit('setToken', response.bearer_token);
          return true;
        }catch(e){
          return false;
        }
      }else{
        return false;
      }
    },

    isAuth: async ({state, dispatch}) => {
      console.log('Использование isAuth');

      if(state.token != ''){
        return true;
      }else if(state.token == ''){
        return await dispatch('resetToken');
      }
      return false;

    }
  }
}