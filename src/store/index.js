import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

import { Notification } from 'element-ui';

import user from './modules/user';
import tikets from './modules/tikets';
import {router} from '~/router';

const siteUrl = 'https://api.kholobok.biz/';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    messages: [],
    route: null
  },
  getters: {},
  mutations: {
    setRoute: (state, payload) => {
      state.route = payload;
    },
    
    delMessages: (state, payload) => {
      state.messages.splice(state.messages.indexOf(payload), 1);
    }
  },
  actions: {

    requestApi: ({state, dispatch, commit}, {url, data = null, method = 'POST'}) => {
      // console.log('Использование requestApi');

      return new Promise((resolve, reject) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${state.user.token}`;
        axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';

        axios({ url: siteUrl + url, data, method})
        .then( async ({data: {data, messages}}) => {

          // dispatch('setMessages', messages);
          if(messages.length > 0 ){
            messages.forEach(element => {
              Notification({ type: element.tupe, title: 'Message', message: element.message, customClass: 'messages-ui' });
            });
          }

          if( messages[0] && messages[0].code == 412){
            if(await dispatch('resetToken')){
              router.go();
            }else{
              commit('setToken', '');
              commit('setTokenRefresh', '');
              commit('setStatus', '');
              router.push({name: 'Authorization'});
              return;
            }
          }
          
          if(data && data.operation === false){
            reject(data); 
          }else{
            resolve(data);
          }
            
        })
        .catch((error) => {
          Notification({ type: 'error', title: 'Ошибка', message: error, customClass: 'messages-ui' });
        })
      });

    }
  },

  modules: {
    user,
    tikets
  },
  strict: true,
  plugins: [createPersistedState()]
});