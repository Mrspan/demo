<template>
  <div id="app">
    <span>{{msg}}</span>
    <p v-bind:title="msg">查看提示信息</p>
    <p v-if="show">看得见</p>
    <p v-if="hide">看不得见</p>
    <ul>
        <li v-for="item in list">
            {{item.name}}
        </li>
    </ul>
    <div>
        <p>{{message}}</p>
        <button v-on:click="res">逆转</button>
    </div>
    <div>
        <input type="text" v-model="text" placeholder="请输入信息">
        <p>{{text}}</p>
    </div>
    <login></login>
    <div :class="obj">登录信息</div>

    <p v-for="(val,index) in list">{{index+":"+val.name}}</p>

  </div>
</template>

<script>
  import "src/common/css/reset.css"
  import Login from  'components/Login/login'
  import 'flexiblejs'  

  export default {
    name: 'info',
    data:function(){
        return {
            msg:"Hello World"+new Date().toLocaleString(),
            show:true,
            hide:false,
            list:[
                {name:"Lucy"},
                {name:"jack"},
                {name:"shuiguo"},
                {name:"xiode"}
            ],
            message:"小心",
            text:"",
            obj:{
                active:true,
                show:false,
                hide:true,
            }
        }
    },
    components: {
        Login
    },
    methods:{
        res:function(){
            this.message=this.msg.split('').reverse().join("");
        }
    },
    created:function(){
     
    }
  }
</script>
<style lang="scss" scoped src='../info/sass/info.scss' ></style>



