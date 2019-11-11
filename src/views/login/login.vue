<template>
<!-- 登录页面 -->
    <div class="login">
        <!-- 头部 -->
        <div class="header">
            <h2>网易</h2>
        </div>
           <!-- 主体 -->
        <div class="main">
            <input type="text" placeholder="网易邮箱账号"><br>
            <input type="password" placeholder="密码"><br>
            <p class="p1">使用网易账号管家,全面保护您的账号！</p>
            <button @click="loginbtn">登录</button>
            <div class="p">
                <p>忘记密码?</p><p class="p2">去注册</p>
            </div>
            <router-view></router-view>
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        loginbtn(){
            alert("登录成功")
            this.$router.push("/home")
        }
        
    },
    created() {
        
    },

}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
.login{
    width: 100%;
    height: 100%;
}
.header{
    width: 100%;
    height: 40px;
    text-align: center;
    background:darkorange;
    line-height: 40px;
}
.main{
    width: 100%;
    flex: 1;
}
.main input{
    width: 70%;
    height: 40px;
    margin-top: 30px;
    padding-left: 10px;
}
.p1{
    font-size: 14px;
    margin-top: 10px;
    color:dodgerblue;
}
.main button{
    width: 70%;
    height: 35px;
    background: darkorange;
    border-radius: 5px;
    margin-top: 15px;
}
.p{
    width: 70%;
    height: 40px;
    /* background: saddlebrown; */
    display: flex;
    margin-left: 15%;
    line-height: 40px;
    font-size: 13px;
}
.p2{
    position: fixed;
    right: 60px;
}
</style>
