import Vue from 'vue';
import { mapActions } from 'vuex'

import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ru-RU'
Vue.use(ElementUI, { locale })

import App from '~/App';
import {router} from '~/router';
import store from '~/store';

(async () => {

  Vue.mixin({
    methods: {
      // getMethod(method, data){
      //   return this.requestApi({ url: 'front/' + method, data, method: 'GET'});
      // },
      // postMethod(method, data){
      //   return this.requestApi({ url: 'front/' + method, data});
      // },
      // ...mapActions([
      //   'requestApi',
      // ])
    }
  });

  new Vue({
    el: '#app',
    // router,
    // store,
    render: h => h(App),
    async created() {},
    mounted() {},
  });

})();