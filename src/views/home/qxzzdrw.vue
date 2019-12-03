<template>
     <!-- 强行终止页面渲染 -->
    <div>
        3
        <div v-for="(item,index) in qxzz" :key="index" class="qxzz">
            <h3>{{item.name}}</h3>
            <p>{{item.title}}</p>
            <p>{{item.content}}</p>

        </div>
        
    </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
// import qxzz from "../../mock/mock3.json"
// console.log(qxzz)
export default {
    data() {
        return {
            
        }
    },
    // 强行页面获取数据
    computed: {
        ...mapState({
            qxzz:state=>state.list3
        })
        
    },
    methods: {
        
    },
    created() {
        
    },

}
</script>

<style>
.qxzz{
    width: 80%;
    height: 150px;
    background: yellow;
    margin-top: 20px;
    border-radius: 15px;
    margin-left: 10%;
}
.qxzz h3{
    padding-top: 20px;
}
.qxzz p{
    padding-top: 15px;
}
</style>