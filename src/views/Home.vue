<template>
  <div class="home">
    <div class="homeheader"> 
      <h2>任务发放</h2>
      <router-link to="/home/qbrw">全部任务</router-link>
      <router-link to="/home/jxzdrw">进行中的任务</router-link>
      <router-link to="/home/qxzzdrw">强行终止的任务</router-link>
      <router-link to="/home/ywcdrw">已完成的任务</router-link>
      <input type="text" placeholder="请输入工作名称进行查询">
    </div>
         <span class="sp1"></span>
    <div class="homemain">
      <router-view></router-view>

    </div>
    
  </div>
</template>

<script>


export default {
  name: 'home',
  components: {
   
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
html,body{
  width: 100%;
  height: 100%;
}
.home{
  width: 100%;
  height: 100%;
  background: skyblue;
}
.homeheader{
  width: 100%;
  height: 100px;
  border-bottom: 2px solid white;
  display: flex;
  justify-content: space-evenly;
  padding-top:30px; 
}
.homeheader a{
  height: 30px;
}
.homeheader a:active{
  background: darkorange;
}
.homeheader input{
 height: 30px;
 width: 300px;
}
.sp1{
  width: 80%;
  height: 40px;
  background: cornflowerblue;
  display: inline-block;
}
.homemain{
  width: 100%;
  flex: 1;
  overflow: auto;

}
</style>
