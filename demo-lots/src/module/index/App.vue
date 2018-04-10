<template>
  <div id="app">
    <!-- <img src="./images/logo.png"> -->
    <login data-tel="13436301996"></login>
  </div>
</template>

<script>
  import 'flexiblejs'
  import 'common/css/reset.css';
  import Login from 'components/Login/login'


  export default {
    name: 'app',
    components: {
      Login
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; 
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
