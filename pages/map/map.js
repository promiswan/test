// 引入SDK核心类
var QQMapWX = require('sdk/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({

  f1:function(event) {
   
    wx.navigateTo({url:'/pages/trolly/trolly'})
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
  },
  
  onShow: function () {
    // 调用接口

    qqmapsdk.search({
      keyword: '美食',
      
      success: function (res) {
        
        var mks = []
        for (var i = 0; i < res.data.length; i++) {
          mks.push({ // 获取返回结果，放到mks数组中
            title: res.data[i].title,
            id: res.data[i].id,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng,
            iconPath: '/pages/image/pin.png', //图标路径
            width: 50,
            height: 50
          })
        }
        this.setData({ //设置markers属性，将搜索结果显示在地图中
          markers: res.data
        })
        
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      },
      success: function (res) {
        console.log(res);
       },


    
    }
    )}})