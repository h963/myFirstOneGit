// pages/shipments/shipments.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    val: '',
    product: [
      {
        img: '/assets/shipments/banner1.png',
        prd_name: '拿铁咖啡',
        prd_num: '×1',
        wc_time: '2020-03-04'
      },{
        img: '/assets/shipments/banner1.png',
        prd_name: '拿铁咖啡',
        prd_num: '×3',
        wc_time: '2020-03-14'
      }
    ]
  },
  scanCode(e){
    var _this = this;
    wx.scanCode({
      success(res){
        _this.setData({val:res.result})
        wx.showToast({
          title: '成功',
          duration: 1000
        })
      }
    })
  },
  chbChange(e){
    console.log(e.detail.value)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})