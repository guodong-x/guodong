import Mock,{Random} from "mockjs"

let data=Mock.mock({
    "attention|30":[{
        "id+1":1,
        title:"@ctitle(6)",
        description:"@cparagraph",
        banner:Random.image("200x120"),
        "comment|100-999":100,
        "favor|100-999":100,
        time:"@datetime"
    }],
    "recommend|30":[{
        "id+1":1,
        title:"@ctitle(6)",
        description:"@cparagraph",
        banner:Random.image("200x120"),
        "comment|100-999":100,
        "favor|100-999":100,
        time:"@datetime"
    }],
    "Search|30":[{
        "id+1":1,
        title:"@ctitle(6)",
        description:"@cparagraph",
        banner:Random.image("200x120"),
        "comment|100-999":100,
        "favor|100-999":100,
        time:"@datetime"
    }],
})

console.log(data)
Mock.mock(/\/api\/list/,"get",function(options){
    let query=options.url.split("?")[1].split("$"),
    queryObj={};
    query.forEach(item=>{
        let arr=item.split("=")
        queryObj[arr[0]]=arr[1]
    })
    let {type,page,pageSize}=queryObj;
    return data[type].slice(pageSize*(page-1),pageSize*page)
})


Mock.mock(/\/api\/detail/,"get",function(options){
    let query=options.url.split("?")[1].split("&"),
    queryObj={}
    query.forEach(item=>{
        let arr=item.split("=")
        queryObj[arr[0]]=arr[1]
    })
    let {id}=queryObj;
    let info={};
    for(let key in data){
        let index=data[key].findIndex(item=>item.id==id);
        if(index !==-1){
            info=data[key][index]
        }
    }
    return info;
})