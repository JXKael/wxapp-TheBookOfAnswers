// answers.js

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: "问心，则无愧",
    subContent: "长按圆桌，开启答案",
    lastIndex: -1,
    answers: [
      "学会珍惜",
      "不要刻意压抑",
      "放轻松，这很简单",
      "去问问你的父亲",
      "请多点耐心",
      "别下太多的赌注",
      "let it go"
      ],
    animation: ''
  },

  touchStartTime: 0,
  touchEndTime: 0,
  duration: 0,
  defaultDuration: 3000,
  deg: 0,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //实例化一个动画
    this.animation = wx.createAnimation({
      // 动画持续时间，单位ms，默认值 400
      duration: 3000,
      /**
       * http://cubic-bezier.com/#0,0,.58,1  
       *  linear  动画一直较为均匀
       *  ease    从匀速到加速在到匀速
       *  ease-in 缓慢到匀速
       *  ease-in-out 从缓慢到匀速再到缓慢
       * 
       *  http://www.tuicool.com/articles/neqMVr
       *  step-start 动画一开始就跳到 100% 直到动画持续时间结束 一闪而过
       *  step-end   保持 0% 的样式直到动画持续时间结束        一闪而过
       */
      timingFunction: 'linear',
      // 延迟多长时间开始
      // delay: 100,
      /**
       * 以什么为基点做动画  效果自己演示
       * left,center right是水平方向取值，对应的百分值为left=0%;center=50%;right=100%
       * top center bottom是垂直方向的取值，其中top=0%;center=50%;bottom=100%
       */
      // transformOrigin: 'left top 0',
    })
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
  
  },

  touchStart: function (e) {
    this.touchStartTime = e.timeStamp
    console.log("touch start at " + this.touchStartTime)

    // 清除旧的内容
    this.clearOldContent()

    // 设置旋转动画
    this.createRotateAnimation()

    // 设置计时器，显示新内容，1.5s归位置
    this.timeout = setTimeout(this.setNewContent.bind(this), 3000)
    this.timeout_after = setTimeout(this.createStopAnimation.bind(this), 3000)
  },

  touchEnd: function (e) {
    this.touchEndTime = e.timeStamp
    console.log("touch end at " + this.touchEndTime)
    this.duration = this.touchEndTime - this.touchStartTime
    // 清除计时-----新内容
    clearTimeout(this.timeout);
    // 清除计时-----1.5s延时
    clearTimeout(this.timeout_after)
    
    if (this.duration < this.defaultDuration) this.createInterruptAnimation()
  },

  /**
   * 清除旧的内容
   */
  clearOldContent: function () {
    this.setData({
      content: "",
      subContent: ""
    })
  },

  /**
   * 设置新的内容
   */
  setNewContent: function () {
    var index = -1;
    if (this.data.lastIndex != -1) {
      // 不是第一次，需要判断重复
      do {
        // 防止和上次重复
        index = Math.floor(Math.random() * this.data.answers.length)
      } while (this.data.lastIndex == index)
    } else {
      // 第一次直接随机
      index = Math.floor(Math.random() * this.data.answers.length)
    }
    // 更新数据以更新显示
    this.setData({
      content: this.data.answers[index],
      lastIndex: index
    })
  },

  /**
   * 设置旋转动画
   */
  createRotateAnimation: function () {
    var rotateAnimation = wx.createAnimation({
      duration: this.defaultDuration,
      timingFunction: 'linear',
    })
    // 输出动画
    rotateAnimation.rotateZ(this.deg + 360).step()
    this.setData({
      animation: rotateAnimation.export()
    })
  },

  /**
   * 设置中断动画
   */
  createInterruptAnimation: function () {
    var interrupAnimation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out',
    })
    var deg = 0.12 * Math.min(this.duration, this.defaultDuration)
    this.deg += Math.round(deg)
    console.log(this.deg)
    interrupAnimation.rotateZ(this.deg).step()
    this.setData({
      //输出动画
      animation: interrupAnimation.export()
    })
  },

  /**
   * 设置停止动画
   */
  createStopAnimation: function () {
    this.deg = Math.floor(this.deg / 360) * 360 + 720
    var stopAnimation = wx.createAnimation({
      duration: 1500,
      timingFunction: 'ease',
    })
    stopAnimation.rotateZ(this.deg).step()
    this.setData({
      //输出动画
      animation: stopAnimation.export()
    })
  }
})