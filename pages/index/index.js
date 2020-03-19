Page({

  /**
   * 页面的初始数据
   */
  data: {
    seachVal: '',
    val: '',
    id: 0,
    orderLay: [
      {
        orderX: '全部',
        status: 100
      }, {
        orderX: '未付款',
        status: 0
      }, {
        orderX: '等待发货',
        status: 40
      }, {
        orderX: '等待收货',
        status: 50
      }, {
        orderX: '已收货',
        status: 90
      }
    ],
    msg: [
      {
        order_placer: '小明',
        consignee: '大明',
        consignee_phone: '1386333369',
        wc_time: '2020-03-04',
        status: 90,
        order_num:  'YCMT1456123586456',
        product_delivery: '拿铁咖啡×1',
        rece_address: '湖南省长沙市开福区运达国际广场'
      },{
        order_placer: '小红',
        consignee: '大红',
        consignee_phone: '15774633369',
        wc_time: '2020-03-05',
        status: 50,
        order_num: 'YCMT1456123586456',
        product_delivery: '拿铁咖啡×2',
        rece_address: '湖南省长沙市开福区运达国际广场'
      }, {
        order_placer: '小强',
        consignee: '大强',
        consignee_phone: '15774633369',
        wc_time: '2020-03-06',
        status: 40,
        order_num: 'YCMT1456123586456',
        product_delivery: '拿铁咖啡×4',
        rece_address: '湖南省长沙市开福区运达国际广场'
      }, {
        order_placer: '小王',
        consignee: '大王',
        consignee_phone: '15774633369',
        wc_time: '2020-03-07',
        status: 0,
        order_num: 'YCMT1456123586456',
        product_delivery: '拿铁咖啡×10',
        rece_address: '湖南省长沙市开福区运达国际广场'
      }
    ]
  },
  click(e) {
    var ids = e.target.dataset.ids; //获取自定义的id
    console.log(e.target.dataset.status)
    this.setData({
      id: ids  //把获取的自定义id赋给当前组件的id(即获取当前组件)  
    })
  },
  scanCode(e){ // 当点击扫描二维码
    var _this = this;
    wx.scanCode({ // 扫描API
      onlyFromCamera: false, // 是否不允许从相册选择图片
      success(res){ // 扫描成功
        console.log(res)
        _this.setData({ val: res.result})
        wx.showToast({
          title: '成功',
          duration: 2000
        })
      }
    })
  },
  seachVal(e){ // 当输入框每次输入时
    this.setData({ seachVal: e.detail.value});
  },
  search(e) { // 点击搜索时触发
    console.log(this.data.seachVal)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
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