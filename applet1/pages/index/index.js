//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    banners:[
      "/assets/1.jpg",
      "/assets/2.jpg",
      "/assets/3.jpg",
      "/assets/4.jpg"
    ],
    list:[{
      id: 1,
      title: '圣诞奇妙味',
      image: '/assets/4.jpg'
    },{
      id: 2,
      title: 'DIY圣诞心意',
      image: '/assets/4.jpg'
    },{
      id: 3,
      title: '为努力喝彩',
      image: '/assets/4.jpg'
    },{
      id: 4,
      title: '感恩有你',
      image: '/assets/4.jpg'
    },{
      id: 5,
      title: '心动传情',
      image: '/assets/4.jpg'
    },{
      id: 6,
      title: '可爱第一名',
      image: '/assets/4.jpg'
    },{
      id: 7,
      title: '咖啡有你',
      image: '/assets/4.jpg'
    },{
      id: 8,
      title: '生日快乐',
      image: '/assets/4.jpg'
    }]
  },
  goDetail(e){
    console.log("e...",eee)
    let {id}=e.currentTarget.dataset;
    wx.navigateTo({url:"/pages/detail/index?id="+id});
  },
  goFavor(){
    wx.navigateTo({url:"/pages/favor/index"});
  },
  goHistory(){
    wx.navigateTo({url:"/pages/history/index"});
  }
})