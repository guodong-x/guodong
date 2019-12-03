<template>
      <!-- 进行中的页面渲染 -->
    <div>
        2
        <div v-for="(item,index) in jxz" :key="index" class="jxzd">
            <h3>{{item.name}}</h3>
            <p>{{item.title}}</p>
            <p>{{item.content}}</p>

        </div>
        
    </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
// import jxzd from "../../mock/mock2.json"
// console.log(jxzd)
export default {
    data() {
        return {
            // listdata:jxzddata
        }
    },
    // 获取进行中的页面数据
    computed: {
        ...mapState({
            jxz:state=>state.list2
        })
        
    },
    methods: {
        
    },
    created() {
        
    },

}
</script>

<style>
.jxzd{
    width: 80%;
    height: 150px;
    background: dimgrey;
    margin-top: 20px;
    border-radius: 15px;
    margin-left: 10%;
}
.jxzd h3{
    padding-top: 20px;
}
.jxzd p{
    padding-top: 15px;
}

</style>