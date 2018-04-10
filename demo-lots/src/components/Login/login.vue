<template>
  <div class="login">
    <span>{{msg}}</span>
    <div>{{name}}</div>
    <p>{{tel}}</p>
    <a href="detail.html">跳转页面</a>
  </div>
</template>

<script>
import Mock from "../../mock"
export default {
  name: 'login',
  data () {
    return {
      msg: 'Hello World !',
      name:"",
      tel:""
    }
  },
  created:function(){
      // console.log(this.$attrs['data-tel']);
      // console.log(Mock.data.info);
      this.name=Mock.data.info.name; 
      this.tel=Mock.data.info.tel; 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .login{
        font-size: 1rem;

        
    }
    span{
            font-size:2rem;
        }
</style>
