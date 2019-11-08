<template>
    <div class="box">
        <div class="header">
            <p @click="back">返回</p>
            <h3>圈子注册</h3>
        </div>

        <div class="main">
            <input type="text" placeholder="用户名" v-model="userName">
            <input type="password" placeholder="密码" v-model="userPwd">
            <button @click="register">注册</button>

        </div>
    </div>
</template>

<script>
import {register} from "@/service/index.js"
export default {
    data(){
        return {
            userName:"",
            userPwd:""
        }
    },
    methods:{
        async register(){
            let {userName,userPwd}=this;
            let result=await register({userName,userPwd})
            if(result&&result.data.code===0){
                alert(result.data.msg)
            }else{
                window.history.back()
            }
        },
        back(){
            window.history.back()
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
}
.header{
    width: 100%;
    height: 50px;
    display: flex;
    background: #ccc;
}
.main{
    width: 100%;
    flex: 1;
}

</style>
