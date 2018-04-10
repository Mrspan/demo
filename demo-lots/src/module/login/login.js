import Vue from 'vue'
import App from './App'
import Mock from '../../mock'
import vueResource from 'vue-resource'
/* eslint-disable no-new */
Vue.use(vueResource);
Vue.http.interceptors.push((request, next) => {
  next((response) => {
    console.log(response);
      if(response.ok){
        // console.log(222,response.status);
        response.data=Mock.data.info;
        response.msg="加载错误";
        return response;
      }

  });
});

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
