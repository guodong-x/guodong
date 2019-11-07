<template>
    <div class="box">
        <div class="header">
            <h3>圈子登录</h3>
        </div>

        <div class="main">
            <input type="text" placeholder="用户名"><br>
            <input type="text" placeholder="登录密码">
            <button>登录</button>
            <p>没有账号，快速注册</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    /* list-style: none; */
}
.box{
    width: 100%;
    height: 100%;
}
.header{
    width: 100%;
    height: 50px;
    background: #ccc;
    text-align: center;
    line-height: 50px;
    font-size: 25px;
}
.main{
    width: 100%;
    flex: 1;
}
.main input{
    width: 95%;
    height: 35px;
    background: #cccccc;
    margin-left: 8px;
}
.main button{
    width: 95%;
    height: 30px;
    margin-left: 10px;
    background: salmon;
}
.main p{
    font-size: 15px;
    margin-left: 15px;
    text-decoration: underline;
}

</style>
