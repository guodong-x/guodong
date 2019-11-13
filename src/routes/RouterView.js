import IndexPage from "../view/indexPage"

export default{
    routes:[{
        path:"/main",
        component:IndexPage,
        children:[
            {
                path:"/main/addgov",
                component:()=><div>新增机构页面</div>
            }

        ]
    }]
}