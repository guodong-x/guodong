<template>
    <div class="qbrw" >
        <!-- 已完成的页面渲染 -->
        1
         <div v-for="(item,index) in ywc" :key="index" class="yi">
            <h3>{{item.name}}</h3>
            <p>{{item.title}}</p>
            <p>{{item.content}}</p>

        </div>
         <div v-for="(item,index) in jxzd" :key="index" class="er">
            <h3>{{item.name}}</h3>
            <p>{{item.title}}</p>
            <p>{{item.content}}</p>

        </div>
         <div v-for="(item,index) in qxzz" :key="index" class="san">
            <h3>{{item.name}}</h3>
            <p>{{item.title}}</p>
            <p>{{item.content}}</p>

        </div>
    </div>
</template>

<script>
import {mapState,mapMutations} from "vuex"
import axios from "axios"
export default {
     data() {
        return {
            
        }
    },
    // 从vuex中哪取数据
    computed: {
        ...mapState({
            jxzd:state=>state.list2,
            ywc:state=>state.list1,
            qxzz:state=>state.list3
        })
        //   ...mapState({
        //     jxzd:state=>state.list2,
        //     // ywcd:state=>state.list1,
        //     // qxzz:state=>state.list3
        // })
        
    },
    // 通过这些方法传回vuex
    methods: {
        ...mapMutations({
            ywcdlist:"ywcdlist",
            // jxzdlist:"jxzdlist",
            // qxzzdlist:"qxzzdlist",

        }),
        ...mapMutations({
            jxzdlist:"jxzdlist",
            
        }),
        ...mapMutations({
            qxzzdlist:"qxzzdlist",
            
        }),
        
    },
    // 请求数据
    created() {
        axios.get("/api/ywclist").then(res=>{
            //  console.log(res)
            this.ywcdlist(res.data)
            // console.log(res)
        })

         axios.get("/api/jxzlist").then(res=>{
            this.jxzdlist(res.data)
            // console.log(res)
        })

         axios.get("/api/qxzzlist").then(res=>{
            this.qxzzdlist(res.data)
            // console.log(res)
        })
        
    },

}
</script>

<style>
.qbrw>div{
    width: 80%;
    margin-top: 15px;
    height: 120px;
    background: springgreen;
    margin-left:10%;
}
.yi>h3{
    padding-top: 15px;

}
.yi p{
    padding-top: 15px;
}
.er>h3{
    padding-top: 15px;

}
.er>p{
    padding-top: 15px;
}
.san>h3{
    padding-top: 15px;

}
.san>p{
    padding-top: 15px;
}
/* .yi{
    text-align: center;
    padding-left: -500px;
    margin: auto;
} */
</style>
