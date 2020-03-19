// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ph_num: '',
    pwd_num: ''
  },
  ph_num(e) { // 当输入框每次输入时
    this.setData({ ph_num: e.detail.value });
  },
  pwd_num(e) { // 当输入框每次输入时
    this.setData({ pwd_num: e.detail.value });
  },
  log_in(e) { // 点击搜索时触发
    console.log(this.data.ph_num, this.data.pwd_num)
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },
  info(res){
    wx.checkSession({ // 检测session_key是否过期
      success(){
        // session_key未过期
        wx.getUserInfo({ //没有过期，可以查询用户的个人信息
          success(e){
            wx.request({
              url: '',
              data: {
                encryptedData: e.encryptedData,
                iv: e.iv,
                login_key: wx.getStorageSync("login_key"),
              },
              method: 'POST',
              header:{
                'content-type': 'application/json'
              },
              success(msg){
                console.log(msg)
              }
            })
          }
        })
      },
      fail(){ // session_key失效，需要重新登录
        wx.login()
      }
    })
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