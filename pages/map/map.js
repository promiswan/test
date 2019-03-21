// 引入SDK核心类
var QQMapWX = require('sdk/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({
data: {
  markers: [{
    id: "myMap",
    zIndex:'10',
    latitude: 30.659840000000003,
    longitude: 104.10194000000001,
    alpha:"0",
    label: {
      content: " eat  ",
      color: "#fff",
      fontSize: "16",
      borderRadius: "10",
      bgColor: "#000",
      padding: "10",
      anchorX: '-30',
      anchorY: '-70',
     
      
      display: "ALWAYS"
    }
    
 
  },
    {
      id: "myMap",
      latitude: 30.675749000,
      longitude: 104.1005480000,

      label: {
        content: " eat  ",
        color: "#fff",
        fontSize: "16",
        borderRadius: "10",
        bgColor: "#000",
        padding: "10",
        anchorX: '-30',
        anchorY: '-70',
      }
     
    }, 
    {
      id: "myMap",
        latitude: 30.6857490000,
        longitude: 104.1005480000,
      label: {
        content: " eat  ",
        color: "#fff",
        fontSize: "16",
        borderRadius: "10",
        bgColor: "#000",
        padding: "10",
        anchorX: '-30',
        anchorY: '-70',}
    }],
  

               
      recordlist: [
        {
          photo: "/pages/image/pic1.jpg",
         
 },
        {
          photo: "/pages/image/pic2.jpg",
      
 },
        {
          photo: "/pages/image/pic3.jpg",

        
 }
      ]
    },
  f1:function(event) {
   
    wx.switchTab({url:'/pages/trolly/trolly'})
  },

  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput: function (e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    var left
    if (pos !== -1) {
      // 光标在中间
      left = e.detail.value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  },
  bindHideKeyboard: function (e) {
    if (e.detail.value === '123') {
      // 收起键盘
      wx.hideKeyboard()
    }
  },


  onLoad: function () {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: "GB6BZ-3OIHO-4BEWH-SBMZX-XLWSJ-VNBTE"
    })
  }
  
  })