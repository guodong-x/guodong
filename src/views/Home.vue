<template>
<!-- 登陆成功之后的home页面 -->
  <div class="home">
     <!-- 登陆成功之后的头部 -->
     <div class="homeheader">
       <p @click="back">back</p>
       <h2>网易</h2>
     </div>
    <!-- 登陆成功之后的主体部分 -->
     <div class="homemain">
       <div class="maintitle">
            <h3>话题：习近平举行仪式欢迎法国总统访华并同其会谈</h3>
       </div>

       <div class="mainipt">
         <p>查看原文</p>
         <input type="text">
         <span>guodong@163.com  退出</span>
       </div>
       <h4>热门跟帖</h4>
       <div class="maincon" v-for="(item,index) in data" :key="index">
         <p>{{item.name}}</p>
         <p>{{item.content}}</p>
        
       </div>
       

     </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import data from "../mock/mock.json"
console.log(data)

export default {
  data() {
    return {
       data:data
        
    }
  },
  methods: {
    back(){
      this.$router.push("/login")
      //  console.log(data)
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
.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.homeheader{
  width: 100%;
  height: 40px;
  background: darkorange;
  text-align: center;
  line-height: 40px;
  display: flex;
}
.homeheader h2{
  margin-left: 120px;
}
.homeheader p{
  margin-left: 10px;
}

.maintitle{
  width: 100%;
  height: 80px;
  margin-top: 10px;
  font-size: 15px;
}
.mainipt{
  width: 100%;
  height: 100px;
}
.mainipt input{
  width: 90%;
  height: 40px;
}
.mainipt p{
  margin-left: 270px;
  color: dodgerblue;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 10px;
}
.mainipt span{
  margin-left: -105px;
}
.homemain h4{
  width: 20%;
  height: 25px;
  display: inline-block;
  margin-left: -290px;
  margin-top: 10px;
  background: red;
  color: #fff;
}
.maincon p{
  /* width: 100%;
  height: 100px;
  background: saddlebrown;
  margin-top: 10px; */
  margin-top: 10px;
  font-size: 15px;
}

</style>


