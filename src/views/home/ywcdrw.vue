<template>
     <!-- 已完成的页面渲染 -->
    <div>
        4
        <div v-for="(item,index) in ywc" :key="index" class="ywc">
            <h3>{{item.name}}</h3>
            <p>{{item.title}}</p>
            <p>{{item.content}}</p>

        </div>
        
    </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
// import ywcd from "../../mock/mock1.json"
// console.log(ywcd)
export default {
    data() {
        return {
            
        }
    },
    // 已完成的页面获取数据
    computed: {
        ...mapState({
            ywc:state=>state.list1
        })
        
    },
    methods: {
        
    },
    created() {
        
    },

}
</script>

<style>
.ywc{
    width: 80%;
    height: 150px;
    background: teal;;
    margin-top: 20px;
    border-radius: 15px;
    margin-left: 10%;
}
.ywc h3{
    padding-top: 20px;
}
.ywc p{
    padding-top: 15px;
}
</style>