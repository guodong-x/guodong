<template>
    <div class="shouye">
        <div class="header">
            <router-link to="/home/shouye/attention">关注</router-link>
             <router-link to="/home/shouye/recommend">推荐</router-link>
              <router-link to="/home/shouye/search">热榜</router-link>
              <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.shouye{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.header{
    width: 100%;
    height: 35px;
    background: darkcyan;
    /* display: flex; */
    float: left;
    line-height: 35px;
    
}
.header a{
    width: 33%;
    display: inline-block; 
}
.header a:hover{
    background: darkgray;
}
</style>
