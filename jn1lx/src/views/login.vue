<template>
    <div class="box">
        <div class="header">
            <h3>圈子登录</h3>
        </div>

        <div class="main">
            <input type="text" placeholder="用户名" v-model="userName" @blur="checkUserName"><br>
            <input type="password" placeholder="登录密码" v-model="userPwd">
            <button @click="login">登录</button>
            <router-link to="/Register">没有账号,快速注册</router-link>
        </div>
    </div>
</template>

<script>
import {login} from "@/service/index.js"
export default {
     data(){
         return {
             userName:"",
             userPwd:""
         }
     },
     methods:{
         async login(){
             let {userName,userPwd}=this;
             let result=await login({userName,userPwd});
             if(result&&result.data.code===1){
                 window.sessionStorage.setItem("isLogin","true");
                 this.$router.replace("/");
             }
             this.$toast(result.data.msg);
         },
         checkUserName(){
             if(!/\w{3,20}/.test(this.userName)){
                 this.$toast("请输入正确的用户名");
             }
         }
     }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
.box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.header{
    width: 100%;
    height: 50px;
    background: #ccc;
    text-align: center;
    line-height: 50px;
    font-size: 25px;
    display: inline-block;
}
.header h3{
    margin: 0 auto;
}
.main{
    width: 100%;
    flex: 1;
}
.main input{
    width: 95%;
    height: 35px;
    background: #cccccc;
    margin-left: 5px;
    font-size: 15px;
    padding-left: 5px;
}
.main button{
    width: 95%;
    height: 40px;
    margin-left: 10px;
    background: salmon;
    margin-top: 15px; 
    font-size: 20px;
}
.main a{
    font-size: 15px;
    margin-left: 15px;
    text-decoration: underline;
    color: slategray;
}

</style>
