<template>
    <div class="home">
        <router-view></router-view>
        <div class="footer">
           <router-link to="/home/shouye">首页</router-link>
            <router-link tag="span" to="/home/xiangfa">想法</router-link>
            <router-link tag="span" to="/home/daxue">大学</router-link>
            <router-link tag="span" to="/home/xiaoxi">消息</router-link>
            <router-link tag="span" to="/home/my">我的</router-link> 
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
.home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.footer{
    width: 100%;
    height: 50px;
    background: salmon;
    display: flex;
    justify-content: space-around;
    line-height: 50px;
    position: fixed;
    bottom: 0;
}
.footer a:hover{
    background: saddlebrown;
}

</style>