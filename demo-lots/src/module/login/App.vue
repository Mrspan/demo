<template>
  <div id="app">
    <!-- <img src="./images/logo.png"> -->
    <login data-tel="13436301996"></login>
    <div class="name">王青</div>
    <a href="info.html">个人中心</a>
  </div>
</template>

<script>
  import 'flexiblejs'  
  import Login from 'components/Login/login'
  import api from '../../api'


  export default {
    name: 'app',
    components: {
      Login
    },
    methods:{

    },
    created:function(){
      var _this=this;
      this.$http.get("http://jsonplaceholder.typicode.com/todos").then(function(res){
          console.log(res.data);
      }).catch()
  }
  }
</script>
<style lang="scss" scoped src='../login/sass/login.scss' ></style>



