<template>
    <div class="box">
        <div class="header">
            <p>返回</p>
            <h3>圈子注册</h3>
        </div>

        <div class="main">
            <input type="text" placeholder="用户名">
            <input type="text" placeholder="密码">
            <button>注册</button>

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
